import React from 'react'
import styles from './UserCard.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import Dropdown from '@/components/UI/Dropdown/Dropdown'

export default function UserCard({isWeight, product, sku, qty, price, status, actions, label}: {isWeight?: boolean, product: string, sku: string, qty:string, price: string, status: string, actions: string, label?: string}) {

    const options = ['Done', 'In Progress', 'Waiting']

    return(
        <div className={styles.userCard}>
            <div>
                <CheckBox></CheckBox>
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                <img alt='' src='/Avatar.png' width={32} height={32}/>
                {product}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {sku}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {qty}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {price}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {status}
            </div>
            {!isWeight ? <div className={`${isWeight ? styles.weight : ''}`}>
                <Icon label='star-dark'></Icon>
                <Icon label='star-dark'></Icon>
                <Icon label='star-dark'></Icon>
                <Icon label='star-dark'></Icon>
                <Icon label='star'></Icon>
            </div> 
            :
            <div className={`${isWeight ? styles.weight : ''}`}>
                Rating
            </div> 
            }
            <div className={`${isWeight ? styles.weight : ''} ${!isWeight ? styles.hovered : ''}`}>
                {actions}
                {!isWeight && <Icon label='arrow-down'></Icon>}
                {/* <Dropdown initialText='Actions' options={options} isActions={true}></Dropdown> */}
            </div>
        </div>
    )
}