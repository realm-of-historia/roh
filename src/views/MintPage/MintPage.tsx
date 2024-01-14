'use client'

import HashAnchor from '@/components/HashAnchor/HashAnchor';
import ImageMy from '@/components/Image/ImageMy';
import Icon from '@/components/UI/Icon/Icon';
import { useAuthStore } from '@/store/store';
import { useCandyDepr } from '@/views/MintPage/hooks/useCandyDepr';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './MintPage.module.scss';
import MintModal from './components/MintModal/MintModal';
import { umiPubkeyFromWalletAdapterPubkey } from './lib/utils';
import { CreateMintTransactionParams, MintingResult } from './types/create_mint';

type CandyDisplayInfo = {
    totalSupply: number,
    supplyMinted: number,
    price: number,
    priceLabel: string,
    startDate: Date | null,
    endDate: Date | null,
    groups: CandyDisplayGroup[]
  }
  
  type CandyDisplayGroup = {
    label: string,
    totalSupply: number,
    price: number,
    priceLabel: string,
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
    const { candy, createMintTransaction, sendAndConfirmAllMints } = useCandyDepr()
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
            setIsLoaderVisible(true);
            const txs = await Promise.all(params.map(p => createMintTransaction(walletAdapter, p)));

            setKey((txs.filter(t => t !== null) as any[])[0].mint.publicKey);

            try {
                const results = await sendAndConfirmAllMints(walletAdapter, txs);

                if (results && results.mintedNfts.length) {
                    setIsLoaderVisible(false)
                    useAuthStore.setState({ mintModalVisible: true });
                    toast.success('Minted successfully');
                }

                setIsLoaderVisible(false)
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
        const totalSupply = Number(candy?.candyGuard?.guards.redeemedAmount !== null ? candy?.candyGuard?.guards.redeemedAmount.maximum.toString() : candy?.itemsAvailable.toString())
        const supplyMinted = Number(candy?.itemsMinted.toString())
        const startDate = candy?.candyGuard?.guards.startDate !== null ? new Date(Number(candy?.candyGuard?.guards.startDate.date) * 1000) : null
        const endDate = candy?.candyGuard?.guards.endDate !== null ? new Date(Number(candy?.candyGuard?.guards.endDate.date) * 1000) : null
        let price = 0
        let priceLabel = 'SOL'
        if (candy?.candyGuard?.guards.solPayment !== null) {
            price = Number(candy?.candyGuard?.guards.solPayment.amount.basisPoints) / 1_000_000_000
        } else if (candy?.candyGuard?.guards.tokenPayment !== null) {
            price = price = Number(candy?.candyGuard?.guards.tokenPayment.amount.basisPoints) / 1_000_000
            priceLabel = 'USDC'
        }

        const groups: CandyDisplayGroup[] = []

        candy?.candyGuard?.groups.forEach(g => {

            const groupTotalSupply = Number(g.guards.redeemedAmount !== null ? g.guards.redeemedAmount.maximum.toString() : totalSupply)
            const groupStartDate = g.guards.startDate !== null ? new Date(Number(g.guards.startDate.date) * 1000) : startDate
            const groupEndDate = g.guards.endDate !== null ? new Date(Number(g.guards.endDate.date) * 1000) : endDate
            let groupPrice = price
            let groupPriceLabel = priceLabel
            if (g.guards.solPayment !== null) {
                price = Number(g.guards.solPayment.amount.basisPoints) / 1_000_000_000
                groupPriceLabel = 'SOL'
            } else if (g.guards.tokenPayment !== null) {
                price = price = Number(g.guards.tokenPayment.amount.basisPoints) / 1_000_000
                priceLabel = 'USDC'
            }

            groups.push({
                label: g.label,
                price: groupPrice,
                totalSupply: groupTotalSupply,
                endDate: groupEndDate,
                startDate: groupStartDate,
                priceLabel: groupPriceLabel
            })
        })

        return {
            totalSupply,
            supplyMinted,
            price,
            priceLabel,
            endDate,
            startDate,
            groups
        }
    }, [candy])

    useEffect(() => {
        let element = document.getElementById("body");
        if (mintModalVisible && element || element && isLoaderVisible) {
          // element.style.cssText = 'overflow: hidden; height: 100vh;'
          document.documentElement.style.overflow = 'hidden';
          document.documentElement.style.height = '100%';
          document.documentElement.style.position = 'relative';
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
        {mintModalVisible && <MintModal publicKey={key}/>}
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
                                {candy ? candy?.candyGuard?.guards.redeemedAmount !== null ? candy?.candyGuard?.guards.redeemedAmount.maximum.toString() : candy.itemsLoaded.toString() : '-'}
                                </p>
                            </div>
                            <div>
                                <p>
                                    {data?.data.attributes.namePrice}
                                </p>
                                <p>
                                    {candyDisplay.price} {candyDisplay.priceLabel}
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
                                    {data?.data.attributes.titleTotalMinted} {candy ? candy.itemsMinted.toString() : '-'} 
                                    /
                                    {candy ? candy.candyGuard?.guards.redeemedAmount !== null ? candy?.candyGuard?.guards.redeemedAmount.maximum.toString() : candy.itemsLoaded.toString() : '-'}
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
