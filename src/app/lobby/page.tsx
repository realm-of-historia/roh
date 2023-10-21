'use client'

import React from 'react'
import LobbyView from '@/views/LobbyView/LobbyView'
import { useApiFetch } from '@/composable/useApiFetch'

export default async function LobbyPage() {
    const data = await useApiFetch('api/loby-page?populate=*')

    return(
        <LobbyView data={data}></LobbyView>
    )
}