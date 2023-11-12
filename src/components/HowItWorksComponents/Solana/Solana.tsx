"use client"

import RunningLineY from '@/components/RunningLine/RunningLineY'
import style from './Solana.module.scss'
import ImageMy from '@/components/Image/ImageMy'
import { useEffect, useRef, useState } from 'react'
import Divider from '@/components/Divider/Divider'


const Solana = ({data} : any) => {
    const ref : any = useRef()
    const [height, setHeight] = useState(0)
    useEffect(() => {
        if(!ref.current){return}
        setHeight(ref.current.getBoundingClientRect().height)
    },[ref])
    return(
        <div className={style.container} ref={ref}>
            <RunningLineY image={data?.ribbon.data.attributes.url} height={height}/>
            <div className={style.containerInfo}>
                <div className={style.wrapperImg}>
                    <ImageMy src={data?.solanaLogo.data.attributes.url} width={200} height={30} alt = ''/>
                </div>
                <h2>{data?.solana.name}</h2>
                <p>{data?.solana.description}</p>
                <Divider position={'bottom left'} />
                <Divider position={'bottom right'} />
            </div>
            <RunningLineY image={data?.ribbon.data.attributes.url} height={height}/>
        </div>
    )
}

export default Solana