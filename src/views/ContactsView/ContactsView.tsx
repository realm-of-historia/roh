'use client'

import React from 'react'
import styles from './ContactsView.module.scss'
import Contacts from './Contacts/Contacts'
import HeadOffice from './HeadOffice/HeadOffice'
import Header from '@/components/Header/Header'

export default function ContactsView() {
    return(
        <div className={styles.contactsView}>
            <Header></Header>
            <Contacts></Contacts>
            <HeadOffice></HeadOffice>
        </div>
    )
}