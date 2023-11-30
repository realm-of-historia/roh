"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout'
import Digest from '@/components/Digest/Digest'
import Details from '@/views/UserPage/screens/UserInfo/sections/Details/Details'
import UserLayout from '@/components/UserLayout/UserLayout'
import HashAnchor from '@/components/HashAnchor/HashAnchor'

export default function page() {
    return(
        <div>
            <HashAnchor />
            <UserLayout></UserLayout>
        </div>
    )
}