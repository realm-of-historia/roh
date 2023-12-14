import React from 'react'
import styles from './Item.module.scss'
import Link from 'next/link'
import Text from '@/components/Text/Text'
import ImageMy from '@/components/Image/ImageMy'
import Divider from '@/components/Divider/Divider'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'

const Item = ({ title, price, image, isText, isArtist, description, href }: { title?: string | Array<string>, price?: string | Array<string>, image: string | Array<string>, isText?: boolean, isArtist?: boolean, description?: any, href?: any }) => {

    return (
        <Link href={href || '/marketplace'}>
            <Divider position={"top right"} noAnim={true} />
            <div className={styles.item}>
                <div className={styles.imageContainer}>
                    {/* <img src={`${image}.png`} alt='' width={360} height={360} /> */}
                    <ImageMy src={image} alt='' width={360} height={360} />
                    <div className={styles.dividerTop}></div>
                    {/* <div className={styles.dividerBottom}></div> */}
                </div>
                <div className={styles.dividerRight}></div>
                <div className={styles.wrapperInfoArtist}> 
                        {
                            description &&
                            description?.map((_: any, i: any) => (
                                <div key={i + 9112} className={styles.title}>
                                    <Text>
                                        <p className={styles.first}>
                                            {_.title}
                                        </p>
                                    </Text>
                                    <Text>
                                        <p className={styles.second}>
                                            {_.meaning}
                                        </p>
                                    </Text>
                                </div>
                            ))
                        }
                        </div>
                {/* {!isText ? <div className={styles.title}>
                <Text>
                    <p className={styles.first}>
                        Title
                    </p>
                </Text>
                <Text>
                    <p className={styles.second}>
                        {title}
                    </p>
                </Text>
            </div> : <></>}
            {!isText ? <div className={styles.price}>
                <Text>
                    <p className={styles.first}>
                        {!isArtist ? 'Purchase' : 'Date'}
                    </p>
                </Text>
                <Text>
                    <p className={styles.second}>
                        {price}
                    </p>
                </Text>
            </div> : <></>} */}
            </div>
        </Link>
    )
}

export default Item