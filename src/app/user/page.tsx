"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout'
import Digest from '@/components/Digest/Digest'
import Details from '@/views/UserPage/screens/UserInfo/sections/Details/Details'

export default function UserPage() {
    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
            <UserNavigation></UserNavigation>
            <ProfileLayout title='PROFILe DeTAILS'><Details></Details></ProfileLayout>
            <Digest></Digest>
        </div>
    )
}