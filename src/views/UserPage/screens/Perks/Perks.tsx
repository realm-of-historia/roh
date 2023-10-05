import React from 'react'
import styles from './Perks.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import UserCard from './UserCard/UserCard'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import { useState } from 'react'

export default function Perks() {

    const [perk, setPerk] = useState('')

    return(
        <div className={styles.perks}>
            <div style={{display: 'flex'}} className={styles.inputBlock}>
                <SimpleInput 
                placeholder='Search perks'
                isContacts={true}
                icon='search-icon'
                value={perk}
                onChange={(e) => setPerk(e.target.value)}
                ></SimpleInput>
            </div>
            <div className={styles.container}>
                <UserCard product='Product' isWeight={true} sku='SKU' qty='QTY' price='Price' status='Status' actions='Actions'></UserCard>
                <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
                <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
                <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
                <UserCard product='Product 1' sku='01244009' qty='26' price='51,00' status='Published' actions='Actions'></UserCard>
            </div>
        </div>
    )
}