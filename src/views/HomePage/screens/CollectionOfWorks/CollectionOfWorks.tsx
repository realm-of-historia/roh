"use client"

import ImageMy from '@/components/Image/ImageMy'
import style from './CollectionOfWorks.module.scss'
import Clock from './components/Clock/Clock'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import Divider from '@/components/Divider/Divider'

const CollectionOfWorks = ({ data }: any) => {
    console.log('CollectionOfWorks', data)
    return (
        <div className={style.container}>
            <div className={style.wrapperColumnLeft}>
                <div>
                    <h2>{data?.header}</h2>
                    <div className={style.wrapperInfo}>
                        {
                            data?.description.map((_: any, i: number) => (
                                <div className={style.containerMeaning}>
                                    <p>{_.title}</p>
                                    <p>{_.meaning}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={style.wrapperClock}>
                    <Divider position={'top right'} horizontal={true}/>
                    <Clock />
                </div>
            </div>
            <div className={style.wrapperImage}>
                <ImageMy src={data?.img.data.attributes.url} width={960} height={960} alt='' />
            </div>
        </div>
    )
}

export default CollectionOfWorks