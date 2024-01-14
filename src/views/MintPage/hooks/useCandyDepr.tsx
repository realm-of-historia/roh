import { getMplClientDepr, getMplClientDeprWithSigner } from "../lib/common"
import { fetchCandyDepr } from "../lib/fetch_candy"
import { getNftByMint } from "../lib/fetch_nfts"
import { determineCandyElligiblePhasesDepr, getCurrentPhaseSettingsDepr } from "../lib/parse_candy"
import { CandyCurrentPhaseSettingsDepr, CandyPhase, FullCandyDetailsDepr } from "../types/candy_info"
import { CreateMintTransactionParams, MintTransactionDepr, MintingResult } from "../types/create_mint"
import { NftWithImage } from "../types/nft"
import { publicKey } from "@metaplex-foundation/umi"
import { WalletContextState } from "@solana/wallet-adapter-react"
import { ComputeBudgetProgram, Keypair, Transaction } from "@solana/web3.js"
import { useCallback, useEffect, useMemo, useState } from "react"


export function useCandyDepr () {
    const [candy, setCandy] = useState<FullCandyDetailsDepr | null>(null)

    const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0)
    const [elligiblePhases, setElligiblePhases] = useState<CandyPhase[]>([])

    // stuff to select phase, probably there will be only 1 elligible phase in production, thus all this stuff below might be useless for ur spesific case

    const selectedPhase: CandyPhase = useMemo(() => {
        if (elligiblePhases.length === 0) return { group: null }
        if (selectedPhaseIndex > elligiblePhases.length - 1) return elligiblePhases[0]
        return elligiblePhases[selectedPhaseIndex]
    }, [elligiblePhases, selectedPhaseIndex])

    const selectedPhaseSettings: CandyCurrentPhaseSettingsDepr = useMemo(() => {
        return candy === null ? { nftBurn: null, tokenPayment: null, solPayment: null } : getCurrentPhaseSettingsDepr(candy, selectedPhase)
    }, [candy, selectedPhase])
    
    const selectNextPhase = () => {
        setSelectedPhaseIndex(prev => {
            if (prev + 1 > elligiblePhases.length - 1) return 0
            return prev + 1
        })
    }

    // create mint tx for signer with params
    const createMintTransaction = useCallback(async (walletAdapter: WalletContextState, params?: CreateMintTransactionParams): Promise<MintTransactionDepr | null> => {
        if (!candy) return null

        if (selectedPhaseSettings.nftBurn !== null && !params?.nftBurn?.mint) {
            throw new Error('Invalid params')
        }

        const mpl = getMplClientDeprWithSigner(walletAdapter)
        const mint = Keypair.generate()
        const mintIx = await mpl.candyMachines().builders().mint({
            candyMachine: candy,
            collectionUpdateAuthority: candy.authorityAddress,
            mint
        })
        const tx = new Transaction()
            .add(ComputeBudgetProgram.setComputeUnitLimit({ units: 1_200_000 }))
            .add(...mintIx.getInstructions())

        return {
            tx,
            mint
        }
    }, [candy, selectedPhaseSettings, selectedPhase])

    // send and confirm all mint transactions
    const sendAndConfirmAllMints = async (walletAdapter: WalletContextState, txs: (MintTransactionDepr | null)[]) => {
        if (!walletAdapter.publicKey || !walletAdapter.signAllTransactions) return null

        const filteredTxs = txs.filter(t => t !== null) as MintTransactionDepr[]
        const { blockhash } = await getMplClientDepr().connection.getLatestBlockhash()
        const builtTxs = filteredTxs.map((t) => {
            const built = t.tx
            built.recentBlockhash = blockhash
            built.feePayer = walletAdapter.publicKey!
            return {
                tx: built,
                mint: t.mint
            }
        })

        const userSignedTxs = await walletAdapter.signAllTransactions(builtTxs.map(t => t.tx))
        const fullSignedTxs = await Promise.all(
            userSignedTxs.map(async (t, i) => {
                const { mint } = filteredTxs[i]
                t.partialSign(mint)
                return { mint, tx: t }
            })
        )

        const txsCount = fullSignedTxs.length
        let successCount = 0
        const signatures: string[] = []
        const mintedNfts: NftWithImage[] = []

        const { connection } = getMplClientDepr()

        await Promise.all(
            fullSignedTxs.map(async (t) => {
                try {
                    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash()
                    const signature = await connection.sendRawTransaction(t.tx.serialize(), { skipPreflight: true })
                    signatures.push(signature)
                    await connection.confirmTransaction({
                        blockhash,
                        lastValidBlockHeight,
                        signature
                    }, "finalized");

                    // transaction shall be considered succeeded ONLY if there is NFT at mint address
                    // confirming tx is not enough - due to bot tax guard tx will success even if nft wasnt minted
                    try {
                        const nft = await getNftByMint(publicKey(t.mint.publicKey.toString()))
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
        fetchCandyDepr().then(c => {
            setCandy(c)
            setSelectedPhaseIndex(0)
        })
    }, [])

    // re-calculate elligible phases every second, since depends on time
    useEffect(() => {
        const interval = setInterval(() => {
            setElligiblePhases(candy === null ? [] : determineCandyElligiblePhasesDepr(candy))
        }, 1000)
        return () => clearInterval(interval)
    }, [candy])

    return { candy, elligiblePhases, selectNextPhase, selectedPhase, selectedPhaseSettings, createMintTransaction, sendAndConfirmAllMints }
}