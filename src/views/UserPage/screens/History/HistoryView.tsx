"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Digest from '@/components/Digest/Digest'
import Cards from '@/views/UserPage/screens/History/Cards/Cards'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import { useState } from 'react'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import styles from './page.module.scss'
import {useForm} from 'react-hook-form'

export default function HistoryView() {

    const [items, setItems] = useState('')

    const {register} = useForm()

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
                register={register}
                name='historySearch'
                ></SimpleInput>
                <UserButtonBlack text='File Manager'></UserButtonBlack>
            </div>  
            <Cards></Cards>
            <Digest></Digest>
        </div>
    )
}