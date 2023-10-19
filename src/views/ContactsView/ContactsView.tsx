// 'use client'

import React from 'react'
import styles from './ContactsView.module.scss'
import Contacts from './Contacts/Contacts'
import HeadOffice from './HeadOffice/HeadOffice'
import Header from '@/components/Header/Header'
import { useSectionData } from '@/composable/useSectionData'
// import Layout from '@/components/Layout/Layout'
export interface StandardComponentProps {
    data?: string
}
export default function ContactsView({data} : StandardComponentProps) {
    const dataContactsTitle = useSectionData(data, 'title')
    const dataContactsButton = useSectionData(data, 'button')
    const dataHeadOfficeContacts = useSectionData(data, 'contacts')
    const dataHeadOfficeSocialMedia = useSectionData(data, 'socialMedia')
    console.log(data)
    return(
        <div className={styles.contactsView}>
            {/* <Header></Header> */}
            <Contacts title={dataContactsTitle} button={dataContactsButton}/>
            <HeadOffice contacts={dataHeadOfficeContacts} socialMedia={dataHeadOfficeSocialMedia}/>
        </div>
    )
}