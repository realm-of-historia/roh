import React from 'react'
import styles from './Bundle.module.scss'
import Text from '../Text/Text'
import Link from 'next/link'
import ImageMy from '../Image/ImageMy'

export interface StandardComponentProps {
    description: any,
    image: string,
    href: string
}

const Bundle = ({ description, image, href }: StandardComponentProps) => {


    return (
        <Link href={href}>
            <div className={styles.bundle}>
                <div className={styles.imageContainer}>
                    {/* <img src={`${image}.png`} alt='' width={480} height={480} /> */}
                    <ImageMy src={image} alt='' width={480} height={480} />
                    <div className={styles.dividerTop}></div>
                    {/* <div className={styles.dividerBottom}></div> */}
                </div>
                <div className={styles.dividerRight}></div>
                {
                    description.map((_ : any,i : number) => (
                        <div key={i + 22} className={styles.title}>
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

export default Bundle