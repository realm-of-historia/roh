'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './MintPage.module.scss'
import Icon from '@/components/UI/Icon/Icon'
import MintGroupsDetails from './components/mint-groups-details/MintGroupsDetails';
import { useAuth } from './hooks/useAuth';
import { useCandy } from './hooks/useCandy';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
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


export default function MintPage() {

    const { authConfig } = useAuth()
    const isSignedIn = useAuthStore((state: any) => (state.isSignedIn))
  


    const compilationRefFirst: any = useRef(null)
    const compilationRefSecond: any = useRef(null)
    const { candy, createMintTransaction, sendAndConfirmAllMints, selectNextPhase, selectedPhase, selectedPhaseSettings, elligiblePhases }: any = useCandy()
    const walletAdapter = useWallet()
    const {auth} = useAuth()

    console.log(candy)

    const [params, setParams] = useState<CreateMintTransactionParams[]>([{}])
    const [mintResult, setMintResult] = useState<MintingResult | null>(null)


    const onMint = async () => {
        if (!walletAdapter.publicKey) return
        const txs = params.map(p => createMintTransaction(umiPubkeyFromWalletAdapterPubkey(walletAdapter.publicKey!), p))
        const results = await sendAndConfirmAllMints(umiSignerFromSolanaWalletAdapter(walletAdapter), txs)
        setMintResult(results)
        setParams([{}])
      }

    const lineFirst = 3
    const lineSecond = 97

    useEffect(() => {
        compilationRefFirst.current.style.width = `${lineFirst}%`
        compilationRefSecond.current.style.width = `${lineSecond}%`
    })

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
                                    count
                                </p>
                            </div>
                            <div>
                                <p>
                                    Price
                                </p>
                                <p>
                                    count
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
                                    {candy ? candy.guard.guards.redeemedAmount.__option === "Some" ? candy.guard.guards.redeemedAmount.value.maximum.toString() : candy.candy.itemsLoaded.toString() : '-'}
                                </p>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div ref={compilationRefFirst} className={styles.leftLine}></div>
                            <div ref={compilationRefSecond} className={styles.rightLine}></div>
                        </div>
                    </div>
                    <div className={styles.third}>
                        <WalletMultiButton style={{marginBottom: '10px'}}/>
                        {isSignedIn ? <div className={styles.wrapper}>
                            <div className={styles.costs} onClick={onMint}>
                                <p>
                                    MINT    
                                </p>
                                <div>
                                    <p>
                                        Estimated costs:
                                    </p>
                                    <p>
                                        0.112 SOL
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
                        <div className={styles.wrapper}>
                            <p onClick={auth} className={styles.signInOption}>Sign In to Mint</p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
