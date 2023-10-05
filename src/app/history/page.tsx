"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Digest from '@/components/Digest/Digest'
import Bundle from '@/components/Bundle/Bundle'
import Payment from '@/views/UserPage/screens/Dashboard/Payment/Payment'
import Cards from '@/views/UserPage/screens/History/Cards/Cards'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import { useState } from 'react'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import styles from './page.module.scss'

export default function HistoryPage() {

    const [items, setItems] = useState('')

    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
            <UserNavigation></UserNavigation>
            <div style={{display: 'flex'}} className={styles.inputBlock}>
                <SimpleInput 
                placeholder='Search'
                isContacts={true}
                icon='search-icon'
                value={items}
                onChange={(e) => setItems(e.target.value)}
                ></SimpleInput>
                <UserButtonBlack text='File Manager'></UserButtonBlack>
            </div>  
            <Cards></Cards>
            <Digest></Digest>
        </div>
    )
}