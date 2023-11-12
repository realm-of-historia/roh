"use client"

import ImageMy from '@/components/Image/ImageMy'
import style from './Scheme.module.scss'
import { useWindowSize } from 'rooks';
import { useMemo, useState } from 'react';
import Divider from '@/components/Divider/Divider';

interface Panegliph {
    img?: string,
    mobailImg?: string
}
const Scheme = ({img, mobailImg} : Panegliph) => {
    const { innerWidth }: number | any = useWindowSize();
    const [mob, setMob] = useState(false)
    useMemo(() => {
        if(innerWidth <= 576 ){
            setMob(false)
        } else {
            setMob(true)
        }
    },[innerWidth, img, mobailImg])

    return(
        <div className={style.container}>
            <Divider position={'top left'} horizontal={true} />
            <ImageMy src={mob ? img : mobailImg} width={mob ? 1920 : 640} height={mob ? 457 : 1168} alt = ''/>
        </div>
    )
}

export default Scheme