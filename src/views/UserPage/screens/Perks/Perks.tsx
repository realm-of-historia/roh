import React from 'react'
import styles from './Perks.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import UserCard from './UserCard/UserCard'

export default function Perks() {


    return(
        <div className={styles.perks}>
            <UserCard product='Product' isWeight={true} sku='SKU' qty='QTY' price='Price' status='Status' actions='Actions'></UserCard>
            <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
            <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
            <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
            <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
        </div>
    )
}