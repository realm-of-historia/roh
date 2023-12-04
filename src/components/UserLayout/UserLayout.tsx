'use client'
import React, { Children } from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import WrapperTexture from '../WrapperTexture/WrapperTexture'


export default function UserLayout() {

    return (
        <div>
            <WrapperTexture>
                <UserInfo lineFirst={91} lineSecond={9}></UserInfo>
            </WrapperTexture>
            <WrapperTexture>
                <UserNavigation></UserNavigation>
            </WrapperTexture>
        </div>
    )
}