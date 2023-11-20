"use client"

import React from 'react'
import MintPage from '@/views/MintPage/MintPage'
import MintProvider from '@/components/MintProvider/MintProvider'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'

export default function PerksPage() {

    return(
        <WrapperTexture>
            <MintProvider>
                <MintPage></MintPage>
            </MintProvider>
        </WrapperTexture>
        )
}