"use client"
import React from 'react'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Payment from '@/views/UserPage/screens/Dashboard/Payment/Payment'
import HashAnchor from '@/components/HashAnchor/HashAnchor'

export default function DashboardView() {
    return(
        <div>
            <HashAnchor />
            <UserNavigation></UserNavigation>
            <Payment></Payment>
        </div>
    )
}