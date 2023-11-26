"use client"

import ImageMy from '@/components/Image/ImageMy'
import style from './CollectionOfWorks.module.scss'
import Clock from './components/Clock/Clock'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import Divider from '@/components/Divider/Divider'
import Text from '@/components/Text/Text'
import { useAuthStore } from '@/store/store'
import { useEffect, useState } from 'react'

const CollectionOfWorks = () => {
    const carahunge: any = useAuthStore((state: any) => (state.carahunges))
    const [data, setData] : any = useState(null)
    useEffect(() => {
        if(!carahunge) return
        setData(carahunge)
    },[carahunge])
    return (
        <>
            {
                data ?
                <div className={style.container}>
                    <div className={style.wrapperColumnLeft}>
                        <div className={style.wrapperText}>
                            {/* <Text> */}
                                <p className={style.textHeader}>{data?.header}</p>
                            {/* </Text> */}
                            <div className={style.wrapperInfo}>
                                {
                                    data?.description.map((_: any, i: number) => (
                                        <div key={i + 993} className={style.containerMeaning}>
                                            <Text>
                                                <p>{_.title}</p>
                                            </Text>
                                            <Text>
                                                <p>{_.meaning}</p>
                                            </Text>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={style.wrapperClock}>
                            <Divider position={'top right'} horizontal={true} />
                            <Divider position={'top right'}/>
                            <Clock data={data.date}/>
                        </div>
                    </div>
                    <div className={style.wrapperImage}>
                        <ImageMy src={data?.img.data.attributes.url} width={960} height={960} alt='' poster={data?.placeholder.data.attributes.url} />
                        <Divider position={'top left'}/>
                    </div>
                </div>
                :
                <></>
            }
        </>

    )
}

export default CollectionOfWorks