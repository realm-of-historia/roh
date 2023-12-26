'use client'

import { useEffect, useRef, useState, useMemo} from 'react'
import styles from './MintPage.module.scss'
import Icon from '@/components/UI/Icon/Icon'
import { useAuth } from './hooks/useAuth';
import { useCandy } from './hooks/useCandy';
import { WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useWallet } from '@solana/wallet-adapter-react';
import { umiPubkeyFromWalletAdapterPubkey, umiSignerFromSolanaWalletAdapter } from './lib/utils';
import { CreateMintTransactionParams, MintingResult } from './types/create_mint';
import { PublicKey, base58PublicKey, generateSigner } from '@metaplex-foundation/umi';
import { useAuthStore } from '@/store/store';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import ImageMy from '@/components/Image/ImageMy';
import HashAnchor from '@/components/HashAnchor/HashAnchor';
import MintModal from './components/MintModal/MintModal';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

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

export default function MintPage({data}: {data: any}) {

    const {setVisible: setModalVisible} = useWalletModal();
    const mintModalVisible = useAuthStore((state: any) => (state.mintModalVisible))
    const [isLoaderVisible, setIsLoaderVisible] = useState(false)
    const [key, setKey] = useState<any>()
    const [mintWalletAddress, setMintWalletAddress] = useState<any>('')


    const {publicKey, walletName} = useWalletMultiButton({
        onSelectWallet() {
            setModalVisible(true);
        },
    });

    const compilationRefFirst: any = useRef(null)
    const compilationRefSecond: any = useRef(null)
    const { candy, createMintTransaction, sendAndConfirmAllMints, selectNextPhase, selectedPhase, selectedPhaseSettings, elligiblePhases }: any = useCandy()
    const walletAdapter = useWallet()


    const [params, setParams] = useState<CreateMintTransactionParams[]>([{}])
    const [mintResult, setMintResult] = useState<MintingResult | null>(null)


    useEffect(() => {
        if(walletAdapter.publicKey) {
            const toLog = umiPubkeyFromWalletAdapterPubkey(walletAdapter.publicKey!)
            setMintWalletAddress(toLog)
        }
    }, [walletAdapter])

    const onMint = async () => {
        if(!publicKey && !walletAdapter.publicKey) {
            setModalVisible(true)
            return
        } else{
            console.log(walletAdapter)
            setIsLoaderVisible(true);
            const txs = params.map(p => createMintTransaction(umiPubkeyFromWalletAdapterPubkey(walletAdapter.publicKey!), p));

            console.log(txs)

            setKey(txs[0].mint.publicKey);

            try {
                const results = await sendAndConfirmAllMints(umiSignerFromSolanaWalletAdapter(walletAdapter), txs);

                if (results && results.mintedNfts.length) {
                    setIsLoaderVisible(false)
                    useAuthStore.setState({ mintModalVisible: true });
                    toast.success('Minted successfully');
                }

                setMintResult(results);
            } catch (error) {
                if (error instanceof Error && error.name === 'AbortError') {
                    setIsLoaderVisible(false);
                    toast.error('Error during mint');
                } else {
                    setIsLoaderVisible(false);
                    toast.error('Error during mint');
                }
            }

            setParams([{}]);
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

    useEffect(() => {
        let element = document.getElementById("body");
        console.log(isLoaderVisible)
        if (mintModalVisible && element || element && isLoaderVisible) {
          // element.style.cssText = 'overflow: hidden; height: 100vh;'
          document.documentElement.style.overflow = 'hidden';
          document.documentElement.style.height = '100%';
          document.documentElement.style.position = 'relative';
          console.log(isLoaderVisible)
        }
        if (!mintModalVisible && element && !isLoaderVisible) {
          // element.style.cssText = 'overflow: visible; height: auto;'
          document.documentElement.style.overflow = '';
          document.documentElement.style.height = '';
          document.documentElement.style.position = '';
        }
      }, [mintModalVisible, isLoaderVisible])

    return(
        <>
        {mintModalVisible && <MintModal publicKey={base58PublicKey(key)}/>}
        {isLoaderVisible &&
                <div className={`${styles.loader} ${isLoaderVisible ? styles.loaderActive : ''}`}>
                    <span className={styles.content}></span>
                </div>
        }
        <div className={styles.mint}>
            <HashAnchor></HashAnchor>
            <div className={styles.container}>
                <div className={styles.videoWrapper}>
                    <ImageMy src={data?.data.attributes.gif.data.attributes.url} poster={data?.data.attributes.preloader.data.attributes.url}/>
                </div>
                <div className={styles.right}>
                    <div className={styles.first}>
                        <p>{data?.data.attributes.header}</p>
                        <p>{data?.data.attributes.description}</p>
                        <div className={styles.divider}></div>
                        <div className={styles.info}>
                            <div>
                                <p>
                                    {data?.data.attributes.nameTotalItems}
                                </p>
                                <p>
                                {candy ? candy?.guard.guards.redeemedAmount.__option === "Some" ? candy?.guard.guards.redeemedAmount.value.maximum.toString() : candy.candy.itemsLoaded.toString() : '-'}
                                </p>
                            </div>
                            <div>
                                <p>
                                    {data?.data.attributes.namePrice}
                                </p>
                                <p>
                                    {candyDisplay.price} SOL
                                </p>
                            </div>
                        </div>
                        <div className={styles.walletInfo}>
                            <p>
                                Mint wallet address:
                            </p>
                            <p>
                                {mintWalletAddress}
                            </p>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.complition}>
                            <div>
                                <p>
                                    {data?.data.attributes.titleTotalMinted} {candy ? candy.candy.itemsRedeemed.toString() : '-'} 
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
                        <div className={styles.wrapper}>
                            <div className={styles.costs} onClick={onMint}>
                                <p>
                                    {data?.data.attributes.mint}
                                </p>
                                <div>
                                    <p>
                                        {data?.data.attributes.estimatedCosts}
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
                        </div>
                        <div className={styles.signOption}>
                            {/* <p className={styles.signInOption}>Cross mint</p> */}
                            <CrossmintPayButton 
                            collectionId="cc11a174-0df9-4df3-bfeb-65ad4014e59f"
                            projectId="1b6866d4-3236-42e9-83a2-f376668316e9"
                            environment="staging"
                            className={styles.payButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
