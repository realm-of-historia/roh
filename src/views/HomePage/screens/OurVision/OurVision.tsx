import React from 'react'
import Column from './Column/Column'
import styles from './OurVision.module.scss'
import Text from '@/components/Text/Text'

const OurVision = ({secondText, list, text, leftSide}: {secondText: string | Array<string>,list: Array<string> | string, text: string | Array<string>, leftSide: string | Array<string>}) => {



    return (
        <div className={styles.vision}>
            <div className={styles.divider}></div>
            <div className={styles.phoneDivider}></div>
            <div className={styles.left}>
                <Text><p>{leftSide}</p></Text>
            </div>
            <div className={styles.right}>
                <Column secondText={secondText} text={text} list={list}></Column>
            </div>
        </div>
    )
}

export default OurVision