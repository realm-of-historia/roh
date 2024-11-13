"use client"

import React from 'react'
import MintPage from '@/views/MintPage/MintPage'
import MintProvider from '@/components/MintProvider/MintProvider'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import { useApiFetch } from '@/composable/useApiFetch'
import BurnToMintPage from '@/views/BurnToMintPage/BurnToMintPage'

export default async function PerksPage() {
    const data = await useApiFetch('api/mint?populate=*')


    return(
        <WrapperTexture>
            <MintProvider>
                <BurnToMintPage data={data}></BurnToMintPage>
            </MintProvider>
        </WrapperTexture>
        )
}