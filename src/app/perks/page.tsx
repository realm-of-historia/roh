"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Digest from '@/components/Digest/Digest'
import Bundle from '@/components/Bundle/Bundle'
import Payment from '@/views/UserPage/screens/Dashboard/Payment/Payment'
import Perks from '@/views/UserPage/screens/Perks/Perks'

export default function PerksPage() {
    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
            <UserNavigation></UserNavigation>
            <Perks></Perks>
            <Digest></Digest>
        </div>
    )
}