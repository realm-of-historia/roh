"use client"

import ImageMy from '@/components/Image/ImageMy'
import style from './CollectionOfWorks.module.scss'
import Divider from '@/components/Divider/Divider'
import Text from '@/components/Text/Text'
import { useAuthStore } from '@/store/store'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

const CollectionOfWorks = () => {
    const carahunge = useAuthStore((state: any) => (state.carahunges))
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        if(!carahunge) return
        setData(carahunge)
    }, [carahunge])

    return (
        <>
            {
                data ?
                <div className={style.container}>
                    <Divider position={'left bottom'} noAnim={true} horizontal={true} opacityNo={true}/>
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
                            <Text>
                                <Markdown className={style.paragraph}>{data?.paragraph}</Markdown>
                            </Text>
                        </div>
                        <div className={style.wrapperClock}>
                            <Divider position={'top right'} horizontal={true}/>
                            <Divider position={'top right'}/>
                            <a href="https://www.crossmint.com/collections/roh-seal-of-carahunge/drop" target="_blank" className={style.button}>BUY</a>
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