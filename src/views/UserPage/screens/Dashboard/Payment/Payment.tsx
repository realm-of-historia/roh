import React, { useEffect } from 'react'
import styles from './Payment.module.scss'
import Option from './Option/Option'
import { useAuthStore } from '@/store/store'
import Dropdown from '@/components/UI/Dropdown/Dropdown'

export default function Payment() {

    const isBuy = useAuthStore((state: any) => (state.isBuy))


    return(
        <div className={styles.payment}>
            <img src='/rockNFT.png' alt='' width={480} height={480}></img>
            <img src='/chestNFT.png' alt='' width={480} height={480}></img>
            <img src='/rockHoleNFT.png' alt='' width={480} height={480}></img>
            {isBuy && <Option name='Bitcoin/BTC' money='$230.00' amount='$0.00000032'></Option>}
            {!isBuy && <Option name='Etherium/ETH' money='$190.00' amount='$0.00000022'></Option>}
        </div>
    )
}