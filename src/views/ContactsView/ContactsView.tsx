import React from 'react'
import styles from './ContactsView.module.scss'
import Contacts from './Contacts/Contacts'
import HeadOffice from './HeadOffice/HeadOffice'

export default function ContactsView() {
    return(
        <div className={styles.contactsView}>
            <Contacts></Contacts>
            <HeadOffice></HeadOffice>
        </div>
    )
}