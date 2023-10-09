import React, {useEffect, useState} from 'react'
import styles from './Option.module.scss'
import Divider from '@/components/Divider/Divider'
import Icon from '@/components/UI/Icon/Icon'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import { useAuthStore } from '@/store/store'
import Dropdown from '@/components/UI/Dropdown/Dropdown'

export default function Option({name, money, amount}: {name: string, money: string, amount: string}) {

    const isBuy: any = useAuthStore((state) => (state.isBuy))

    const clickHandlerBuy = () => {
        useAuthStore.setState({isBuy: true})
    }

    const clickHandlerSell = () => {
        useAuthStore.setState({isBuy: false})
    }

    useEffect(() => {
        console.log(isBuy)
    })

    const options = ['Bitcoin/BTC', 'Etherium/ETH', 'Dogecoin/DGC'];


    return(
        <div className={styles.option}>
            <div></div>
            <div></div>
            <div className={styles.choose}>
                <button onClick={clickHandlerBuy} className={`${isBuy ? styles.buttonActive : ''}`}><div><p>Buy</p></div></button>
                <button onClick={clickHandlerSell} className={`${!isBuy ? styles.buttonActive : ''}`}><div><p>Sell</p></div></button>
            </div>
            <div className={styles.coinName}>
                <Dropdown options={options} initialText='Bitcoin/BTC'></Dropdown>
            </div>
            <div className={styles.money}>
                <div className={styles.text}>
                    <div>
                        <p> 
                            Amount
                        </p>
                    </div>
                    <div>
                        <p>
                            {money}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.amount}>
                <div className={styles.text}>
                    <div>
                        <p> 
                            Amount
                        </p>
                    </div>
                    <div>
                        <p>
                            {amount}
                        </p>
                    </div>
                </div>
            </div>
            <UserButtonBlack text='Make Payment' isPayment></UserButtonBlack>
        </div>
    )
}