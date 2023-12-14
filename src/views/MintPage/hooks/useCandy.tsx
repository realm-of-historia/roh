import { getUmi, getUmiWithSigner } from "../lib/common"
import { fetchCandy } from "../lib/fetch_candy"
import { getNftByMint } from "../lib/fetch_nfts"
import { determineCandyElligiblePhases, getCurrentPhaseSettings } from "../lib/parse_candy"
import { CandyPhase, CandyCurrentPhaseSettings, FullCandyDetails } from "../types/candy_info"
import { CreateMintTransactionParams, MintTransaction, MintingResult } from "../types/create_mint"
import { NftWithImage } from "../types/nft"
import { mintV2 } from "@metaplex-foundation/mpl-candy-machine"
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata"
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox"
import { PublicKey, Signer, createNoopSigner, generateSigner, some, transactionBuilder } from "@metaplex-foundation/umi"
import { base58 } from "@metaplex-foundation/umi/serializers"
import { useCallback, useEffect, useMemo, useState } from "react"


export function useCandy () {
    const [candy, setCandy] = useState<FullCandyDetails | null>(null)

    const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0)
    const [elligiblePhases, setElligiblePhases] = useState<CandyPhase[]>([])

    // stuff to select phase, probably there will be only 1 elligible phase in production, thus all this stuff below might be useless for ur spesific case

    const selectedPhase: CandyPhase = useMemo(() => {
        if (elligiblePhases.length === 0) return { group: null }
        if (selectedPhaseIndex > elligiblePhases.length - 1) return elligiblePhases[0]
        return elligiblePhases[selectedPhaseIndex]
    }, [elligiblePhases, selectedPhaseIndex])

    const selectedPhaseSettings: CandyCurrentPhaseSettings = useMemo(() => {
        return candy === null ? { nftBurn: null, tokenPayment: null, solPayment: null } : getCurrentPhaseSettings(candy.guard, selectedPhase)
    }, [candy, selectedPhase])
    
    const selectNextPhase = () => {
        setSelectedPhaseIndex(prev => {
            if (prev + 1 > elligiblePhases.length - 1) return 0
            return prev + 1
        })
    }

    // create mint tx for signer with params
    const createMintTransaction = useCallback((signer: PublicKey, params?: CreateMintTransactionParams): MintTransaction | null => {
        if (!candy) return null

        if (selectedPhaseSettings.nftBurn !== null && !params?.nftBurn?.mint) {
            throw new Error('Invalid params')
        }

        const umi = getUmiWithSigner(createNoopSigner(signer))
        const mint = generateSigner(umi)
        const tx = transactionBuilder()
            .add(setComputeUnitLimit(umi, { units: 1_200_000 }))
            .add(
                mintV2(umi, {
                    candyMachine: candy.candy.publicKey,
                    nftMint: mint,
                    collectionMint: candy.candy.collectionMint,
                    collectionUpdateAuthority: candy.candy.authority,
                    candyGuard: candy.guard.publicKey,
                    authorizationRules: candy.candy.ruleSet.__option === "Some" ? candy.candy.ruleSet.value : undefined,
                    group: selectedPhase.group ? some(selectedPhase.group) : undefined,
                    mintArgs: {
                        nftBurn: params?.nftBurn?.mint && selectedPhaseSettings.nftBurn?.requiredCollection ? some({
                            mint: params.nftBurn.mint,
                            requiredCollection: selectedPhaseSettings.nftBurn.requiredCollection,
                            tokenStandard: params.nftBurn.tokenStandard || TokenStandard.NonFungible
                        }) : undefined,
                        tokenPayment: selectedPhaseSettings.tokenPayment ? some({
                            mint: selectedPhaseSettings.tokenPayment.mint,
                            destinationAta: selectedPhaseSettings.tokenPayment.destinationAta
                        }) : undefined,
                        solPayment: selectedPhaseSettings.solPayment ? some({
                            destination: selectedPhaseSettings.solPayment
                        }) : undefined
                    }
                })
            )

        return {
            tx,
            mint
        }
    }, [candy, selectedPhaseSettings, selectedPhase])

    // send and confirm all mint transactions
    const sendAndConfirmAllMints = async (signer: Signer, txs: (MintTransaction | null)[]) => {
        const filteredTxs = txs.filter(t => t !== null) as MintTransaction[]
        const umi = getUmiWithSigner(signer)
        const builtTxs = await Promise.all(
            filteredTxs.map(async (t) => {
                const built = await t.tx.buildWithLatestBlockhash(umi)
                return {
                    tx: built,
                    mint: t.mint
                }
            })
        )

        const userSignedTxs = await signer.signAllTransactions(builtTxs.map(t => t.tx))
        const fullSignedTxs = await Promise.all(
            userSignedTxs.map(async (t, i) => {
                const { mint } = filteredTxs[i]
                const tx = await mint.signTransaction(t)
                return { mint, tx }
            })
        )

        const txsCount = fullSignedTxs.length
        let successCount = 0
        const signatures: string[] = []
        const mintedNfts: NftWithImage[] = []

        await Promise.all(
            fullSignedTxs.map(async (t) => {
                try {
                    const { blockhash, lastValidBlockHeight } = await umi.rpc.getLatestBlockhash()
                    const signature = await umi.rpc.sendTransaction(t.tx)
                    signatures.push(base58.deserialize(signature)[0])
                    await umi.rpc.confirmTransaction(signature, { commitment: "finalized", strategy: { blockhash, lastValidBlockHeight, type: "blockhash" } })

                    // transaction shall be considered succeeded ONLY if there is NFT at mint address
                    // confirming tx is not enough - due to bot tax guard tx will success even if nft wasnt minted
                    try {
                        const nft = await getNftByMint(t.mint.publicKey)
                        mintedNfts.push(nft)
                        successCount += 1
                    } catch {}
                } catch {}
            })
        )

        return {
            txsCount,
            signatures,
            successCount,
            mintedNfts
        } as MintingResult
    }

    // fetch candy machine on rednre
    useEffect(() => {
        fetchCandy().then(c => {
            setCandy(c)
            setSelectedPhaseIndex(0)
        })
    }, [])

    // re-calculate elligible phases every second, since depends on time
    useEffect(() => {
        const interval = setInterval(() => {
            setElligiblePhases(candy === null ? [] : determineCandyElligiblePhases(candy))
        }, 1000)
        return () => clearInterval(interval)
    }, [candy])

    return { candy, elligiblePhases, selectNextPhase, selectedPhase, selectedPhaseSettings, createMintTransaction, sendAndConfirmAllMints }
}