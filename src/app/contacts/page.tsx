import React from 'react'
import Header from '@/components/Header/Header'
import ContactsView from '@/views/ContactsView/ContactsView'

export default function ContactsPage() {
    return(
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <ContactsView></ContactsView>
        </div>
    )
}