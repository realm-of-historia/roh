import React, {useEffect, useState} from 'react'
import styles from './Option.module.scss'
import Divider from '@/components/Divider/Divider'
import Icon from '@/components/UI/Icon/Icon'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import { useAuthStore } from '@/store/store'
import Dropdown from '@/components/UI/Dropdown/Dropdown'
import Select from 'react-select'

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

    const options = [
        { value: 'Bitcoin/BTC', label: 'Bitcoin/BTC',},
        { value: 'Etherium/ETH', label: 'Etherium/ETH' },
        { value: 'Dogecoin/DGC', label: 'Dogecoin/DGC' },
    ]


    const selectStyles: any = {
        control: (styles: any) => ({ ...styles, backgroundColor: '#FBF6E8', border: 'none',
         color: '#583F21 !important', padding: '0px',
        
    }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected } : {data: any, isDisabled: boolean, isFocused: boolean, isSelected: boolean}) => {
          const color = data.color;
          return {
            ...styles,
            backgroundColor: '#FBF6E8',
            color: '#583F21 !important',
            cursor: isDisabled ? 'not-allowed' : 'default',
          };
        },
      };


    return(
        <div className={styles.option}>
            <div></div>
            <div></div>
            <div className={styles.choose}>
                <button onClick={clickHandlerBuy} className={`${isBuy ? styles.buttonActive : ''}`}><div><p>Buy</p></div></button>
                <button onClick={clickHandlerSell} className={`${!isBuy ? styles.buttonActive : ''}`}><div><p>Sell</p></div></button>
            </div>
            <div className={styles.coinName}>
                {/* <Dropdown options={options} initialText='Bitcoin/BTC'></Dropdown> */}
                <div className={styles.selectContainer}>
                        <input className={styles.dividerDetector}/>
                        <p className={styles.name}>
                            Coin Name
                        </p>
                        <Select  onChange={(element) => console.log(element)} className={styles.selectStyles} placeholder={'Bitcoin/BTC'} options={options} styles={selectStyles}/>
                    </div>
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