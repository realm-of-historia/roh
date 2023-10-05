import React from 'react'
import styles from './Payment.module.scss'
import Option from './Option/Option'

export default function Payment() {


    return(
        <div className={styles.payment}>
            <img src='/rockNFT.png' alt='' width={480} height={480}></img>
            <img src='/chestNFT.png' alt='' width={480} height={480}></img>
            <img src='/rockHoleNFT.png' alt='' width={480} height={480}></img>
            <Option></Option>
        </div>
    )
}