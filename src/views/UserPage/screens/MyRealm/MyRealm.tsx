'use client'

import { useAuthStore } from '@/store/store'
import style from './MyRealm.module.scss'
import { getAllRohCollectionNftByOwner } from '@/solanaService'
import { useEffect, useState } from 'react'

const MyRealm = ({data} : any) => {

    const profileSigner = useAuthStore((state: any) => (state.profileSigner))
    const [nfts, setNfts] = useState<any>([])

    useEffect(() => {
        const fetchNfts = async () => {
            try {
                const nftsArr = await getAllRohCollectionNftByOwner(profileSigner);
                console.log(nftsArr)
                setNfts(nftsArr);
            } catch (error) {
                console.error('Error fetching NFTs:', error);
            }
        };
        fetchNfts();
    }, [profileSigner]);

    return(
        <div className={style.wrapper}>   
            {/* {
                data?.map((_ :any, i : number) => (
                    <img key={i + 34221} src={_.url} width={448} height={448} alt=''/>
                ))
            } */}
            {nfts?.map((el: any, index: number) => (
                <div className={style.nftCard}>
                    <div className={style.imgWrapper}>
                        <img src={el.content.links.image}/>
                    </div>
                    <div className={style.viewButton}>
                        View on SolScan
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyRealm