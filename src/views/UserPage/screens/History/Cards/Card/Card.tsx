import React from 'react'
import styles from './Card.module.scss'
import Text from '@/components/Text/Text'

export default function Card({title, text}: {title: string | Array<string>, text: string | Array<string>}) {

    return(
        <div className={styles.card}>
            <div className={styles.logo}>
                <Text><p className={styles.first}>{title}</p></Text>
                <Text><p className={styles.second}>{text}</p></Text>
            </div>
            <div className={`${styles.divider} ${styles.block}`}></div>
            <div className={`${styles.topFirst} ${styles.block}`}></div>
            <div className={`${styles.topSecond} ${styles.block}`}></div>
            <div className={`${styles.left} ${styles.block}`}></div>
            <div className={`${styles.right} ${styles.block}`}></div>
            <div className={`${styles.mainCircle} ${styles.block}`}></div>
            <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
            <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
            <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
            <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
        </div>
    )
}