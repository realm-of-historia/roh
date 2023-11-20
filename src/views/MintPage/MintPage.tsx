'use client'

import { useEffect, useRef, useState, useMemo} from 'react'
import styles from './MintPage.module.scss'
import Icon from '@/components/UI/Icon/Icon'
import MintGroupsDetails from './components/mint-groups-details/MintGroupsDetails';
import { useAuth } from './hooks/useAuth';
import { useCandy } from './hooks/useCandy';
import { WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { createSignerFromWalletAdapter } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { useWallet } from '@solana/wallet-adapter-react';
import { umiPubkeyFromWalletAdapterPubkey, umiSignerFromSolanaWalletAdapter } from './lib/utils';
import { CreateMintTransactionParams, MintingResult } from './types/create_mint';
import SelectNftToBurn from './components/select-nft-to-burn/SelectNftToBurn';
import { PublicKey } from '@metaplex-foundation/umi';
import { TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import MintingResultDisplay from './components/minting-result/MintingResult';
import MintProvider from '@/components/MintProvider/MintProvider';
import { useAuthStore } from '@/store/store';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';

type CandyDisplayInfo = {
    totalSupply: number,
    supplyMinted: number,
    price: number,
    startDate: Date | null,
    endDate: Date | null,
    groups: CandyDisplayGroup[]
  }
  
  type CandyDisplayGroup = {
    label: string,
    totalSupply: number,
    price: number,
    startDate: Date | null,
    endDate: Date | null,
  } 

export default function MintPage() {

    const { authConfig } = useAuth()
    const isSignedIn = useAuthStore((state: any) => (state.isSignedIn))
    const {setVisible: setModalVisible} = useWalletModal();

    const {publicKey} = useWalletMultiButton({
        onSelectWallet() {
            setModalVisible(true);
        },
    });

    console.log(publicKey)

    const compilationRefFirst: any = useRef(null)
    const compilationRefSecond: any = useRef(null)
    const { candy, createMintTransaction, sendAndConfirmAllMints, selectNextPhase, selectedPhase, selectedPhaseSettings, elligiblePhases }: any = useCandy()
    const walletAdapter = useWallet()
    const {auth} = useAuth()


    const [params, setParams] = useState<CreateMintTransactionParams[]>([{}])
    const [mintResult, setMintResult] = useState<MintingResult | null>(null)


    const onMint = async () => {
        if(!publicKey && !walletAdapter.publicKey) {
            setModalVisible(true)
            return
        } else{
            const txs = params.map(p => createMintTransaction(umiPubkeyFromWalletAdapterPubkey(walletAdapter.publicKey!), p))
            const results = await sendAndConfirmAllMints(umiSignerFromSolanaWalletAdapter(walletAdapter), txs)
            setMintResult(results)
            setParams([{}])
        }
      }

    const lineFirst = 3
    const lineSecond = 97

    useEffect(() => {
        compilationRefFirst.current.style.width = `${lineFirst}%`
        compilationRefSecond.current.style.width = `${lineSecond}%`
    })

    const candyDisplay: CandyDisplayInfo = useMemo(() => {
        const totalSupply = Number(candy?.guard.guards.redeemedAmount.__option === "Some" ? candy?.guard.guards.redeemedAmount.value.maximum.toString() : candy?.candy.data.itemsAvailable.toString())
        const supplyMinted = Number(candy?.candy.itemsRedeemed.toString())
        const price = candy?.guard.guards.solPayment.__option === "Some" ? Number(candy?.guard.guards.solPayment.value.lamports.basisPoints.toString()) / 1_000_000_000 : 0
        const startDate = candy?.guard.guards.startDate.__option === "Some" ? new Date(Number(candy?.guard.guards.startDate.value.date.toString()) * 1000) : null
        const endDate = candy?.guard.guards.endDate.__option === "Some" ? new Date(Number(candy?.guard.guards.endDate.value.date.toString()) * 1000) : null

        const groups: CandyDisplayGroup[] = []

        candy?.guard.groups.forEach((g: any) => {

            const groupTotalSupply = Number(g.guards.redeemedAmount.__option === "Some" ? g.guards.redeemedAmount.value.maximum.toString() : totalSupply)
            const groupPrice = g.guards.solPayment.__option === "Some" ? Number(g.guards.solPayment.value.lamports.basisPoints.toString()) / 1_000_000_000 : price
            const groupStartDate = g.guards.startDate.__option === "Some" ? new Date(Number(g.guards.startDate.value.date.toString()) * 1000) : startDate
            const groupEndDate = g.guards.endDate.__option === "Some" ? new Date(Number(g.guards.endDate.value.date.toString()) * 1000) : endDate
            
            groups.push({
            label: g.label,
            price: groupPrice,
            totalSupply: groupTotalSupply,
            endDate: groupEndDate,
            startDate: groupStartDate
            })
        })

        return {
            totalSupply,
            supplyMinted,
            price,
            endDate,
            startDate,
            groups
        }
    }, [candy?.guard])

    // useEffect(() => {
    //     if(candy?.guard) {
    //         console.log(candy?.guard)
    //     }
    // }, [candy])

    return(
        <div className={styles.mint}>
            <div className={styles.container}>
                <img src='/1.png'/>
                <div className={styles.right}>
                    <div className={styles.first}>
                        <p>Chapter: Carahunge X</p>
                        <p>This digital asset is a mark. You are a Steward of Historia. Whilst the artwork itself features original pieces embedded within from renowned Armenian artists, creating a fusion of art and history as they come together to represent the ancient heritage site of Armenia - Carahunge. Stewards directly impact heritage sites around the world, contributing to their preservation and research.</p>
                        <div className={styles.divider}></div>
                        <div className={styles.info}>
                            <div>
                                <p>
                                    Total Items
                                </p>
                                <p>
                                {candy ? candy?.guard.guards.redeemedAmount.__option === "Some" ? candy?.guard.guards.redeemedAmount.value.maximum.toString() : candy.candy.itemsLoaded.toString() : '-'}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Price
                                </p>
                                <p>
                                    {candyDisplay.price} SOL
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.complition}>
                            <div>
                                <p>
                                    TOTAL MINTeD {candy ? candy.candy.itemsRedeemed.toString() : '-'} 
                                    /
                                    {candy ? candy?.guard.guards.redeemedAmount.__option === "Some" ? candy?.guard.guards.redeemedAmount.value.maximum.toString() : candy.candy.itemsLoaded.toString() : '-'}
                                </p>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div ref={compilationRefFirst} className={styles.leftLine}></div>
                            <div ref={compilationRefSecond} className={styles.rightLine}></div>
                        </div>
                    </div>
                    <div className={styles.third}>
                        {isSignedIn ? <div className={styles.wrapper}>
                            <div className={styles.costs} onClick={onMint}>
                                <p>
                                    MINT    
                                </p>
                                <div>
                                    <p>
                                        Cost:
                                    </p>
                                    <p>
                                        {candyDisplay.price * params.length} SOL
                                    </p>
                                </div>
                            </div>
                            <div className={styles.amount}>
                                <div onClick={() => setParams(prev => prev.length > 1 ? [...prev.slice(0, -1)] : prev)}><Icon label='minus'></Icon></div>
                                <p>
                                    {params.length.toString()}
                                </p>
                                <div onClick={() => setParams(prev => [...prev, {}])}><Icon label='plus'></Icon></div>
                            </div>
                        </div> : 
                        <div onClick={auth} className={styles.wrapperOption}>
                            <p className={styles.signInOption}>Sign In</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
