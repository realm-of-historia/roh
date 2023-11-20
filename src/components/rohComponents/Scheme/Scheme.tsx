"use client"

import ImageMy from '@/components/Image/ImageMy'
import style from './Scheme.module.scss'
import { useWindowSize } from 'rooks';
import { useEffect, useMemo, useState } from 'react';
import Divider from '@/components/Divider/Divider';

interface Panegliph {
    img?: any,
    mobailImg?: any
}
const Scheme = ({img, mobailImg} : Panegliph) => {
    const { innerWidth }: number | any = useWindowSize();
    const [mob, setMob] = useState(false)
    // const [imgAd, setImgAd] = useState()
    useMemo(() => {
        if(innerWidth <= 576 ){
            setMob(false)
        } else {
            setMob(true)
        }
    },[innerWidth, img, mobailImg])
    // useEffect(() => {
    //     if(!img) {return}
    //     if(innerWidth < 1080 && img){
    //         setImgAd(img.formats.thumbnail.url)
    //     } else if(innerWidth < 576 && mobailImg){
    //         setImgAd(mobailImg)
    //     } else {
    //         setImgAd(img.url)
    //     }
    // },[innerWidth, img, mobailImg])
    return(
        <div className={style.container}>
            <Divider position={'top left'} horizontal={true} noAnim={true}/>
            <ImageMy src={mob ? img : mobailImg} width={mob ? 1920 : 640} height={mob ? 457 : 1168} alt = ''/>
        </div>
    )
}

export default Scheme