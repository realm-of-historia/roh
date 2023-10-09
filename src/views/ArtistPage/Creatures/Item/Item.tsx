import React from 'react'
import styles from './Item.module.scss'
import Link from 'next/link'
import Text from '@/components/Text/Text'

const Item = ({title, price, image, isText, isArtist}: {title: string | Array<string>, price: string | Array<string>, image: string | Array<string>, isText?: boolean, isArtist?: boolean}) => {


  return (
    <Link href='/marketplace'> 
        <div className={styles.item}>
            <div className={styles.imageContainer}>
                <img src={`${image}.png`} alt='' width={360} height={360}/>
                <div className={styles.dividerTop}></div>
                {/* <div className={styles.dividerBottom}></div> */}
            </div>
            <div className={styles.dividerRight}></div>
            {!isText ? <div className={styles.title}>
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
            </div> : <></>}
        </div>
    </Link>
  )
}

export default Item