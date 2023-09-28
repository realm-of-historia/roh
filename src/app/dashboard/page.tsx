"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Digest from '@/components/Digest/Digest'
import Bundle from '@/components/Bundle/Bundle'

export default function UserPage() {
    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
            <UserNavigation></UserNavigation>
            <div style={{display: "flex"}}>
                <Bundle title={'ff'} price={'ff'} isText={true} image={'chestNFT'}></Bundle>
                <Bundle title={'ff'} price={'ff'} isText={true} image={'rockNFT'}></Bundle>
                <Bundle title={'ff'} price={'ff'} isText={true} image={'rockHoleNFT'}></Bundle>
            </div>
            <Digest></Digest>
        </div>
    )
}