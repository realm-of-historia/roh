"use client"

import React from 'react'
import MintPage from '@/views/MintPage/MintPage'
import MintProvider from '@/components/MintProvider/MintProvider'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import { useApiFetch } from '@/composable/useApiFetch'

export default async function PerksPage() {
    const data = await useApiFetch('api/mint?populate=*')


    return(
        <WrapperTexture>
            <MintProvider>
                <MintPage data={data}></MintPage>
            </MintProvider>
        </WrapperTexture>
        )
}