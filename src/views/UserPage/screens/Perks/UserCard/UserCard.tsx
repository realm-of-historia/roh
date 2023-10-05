import React from 'react'
import styles from './UserCard.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'

export default function UserCard({isWeight, product, sku, qty, price, status, actions, label}: {isWeight?: boolean, product: string, sku: string, qty:string, price: string, status: string, actions: string, label?: string}) {


    return(
        <div className={styles.userCard}>
            <div>
                <Icon label='check-icon'></Icon>
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
            </div>
        </div>
    )
}