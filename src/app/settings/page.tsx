"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Digest from '@/components/Digest/Digest'
import Settings from '@/views/UserPage/screens/Settings/Settings'


export default function SettingsPage() {
    return(
        <div>
            <Settings></Settings>
        </div>
    )
}