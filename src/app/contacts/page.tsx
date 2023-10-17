import React from 'react'
import Header from '@/components/Header/Header'
import ContactsView from '@/views/ContactsView/ContactsView'
import Layout from '@/components/Layout/Layout'
import { useApiFetch } from '@/composable/useApiFetch'

export default async function ContactsPage() {
    const data = await useApiFetch('api/blog-page?populate[video][populate]=*&populate[cardBundles][populate]=*&populate[collectionOfPictures][populate]=*&populate[ribbon][populate]=*&populate[instagramPostText][populate]=*')

    return (
        <div style={{ overflowX: 'hidden' }}>
            <ContactsView></ContactsView>
        </div>
    )
}