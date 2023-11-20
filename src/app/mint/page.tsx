"use client"

import React from 'react'
import MintPage from '@/views/MintPage/MintPage'
import MintProvider from '@/components/MintProvider/MintProvider'

export default function PerksPage() {

    return(
            <MintProvider>
                <MintPage></MintPage>
            </MintProvider>
        )
}