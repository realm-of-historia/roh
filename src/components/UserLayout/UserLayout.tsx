'use client'
import React from 'react'
import Header from '../Header/Header'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Digest from '../Digest/Digest'
import { useAuthStore } from '@/store/store'
import Details from '@/views/UserPage/screens/UserInfo/sections/Details/Details'
import HistoryView from '@/views/UserPage/screens/History/History/History'
import Perks from '@/views/UserPage/screens/Perks/PerksComponent/PerksComponent'
import Settings from '@/views/UserPage/screens/Settings/Settings'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import ProfileLayout from '../ProfileLayout/ProfileLayout'
import Dashboard from '@/views/UserPage/screens/Dashboard/Dashboard/Dashboard'
import Layout from '../Layout/Layout'
import MyRealm from '@/views/UserPage/screens/MyRealm/MyRealm'
import WrapperTexture from '../WrapperTexture/WrapperTexture'
import TheVault from '@/views/UserPage/screens/TheVault/TheVault'


export default function UserLayout() {

    const route = useAuthStore((state) => (state.userRoute))

    const cards = [
        ['Product1', '01244009', '26', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '27', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '28', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '29', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '30', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '31', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '32', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '33', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '34', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '35', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '36', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '37', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '38', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '39', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '40', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '41', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '42', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '43', '51,00', 'Published', 'Actions'],
        ['Product1', '01244009', '44', '51,00', 'Published', 'Actions'],
    ]
    const dataMyRealm = [
        {
            url: '/NFT.png'
        },
        {
            url: '/NFT.png'
        },
        {
            url: '/NFT.png'
        },
        {
            url: '/NFT.png'
        },

    ]
    return (
        <div>
            <WrapperTexture>
                <UserInfo lineFirst={91} lineSecond={9}></UserInfo>
            </WrapperTexture>
            <WrapperTexture>
                <UserNavigation></UserNavigation>
            </WrapperTexture>
            {/* {route == 'personal' ? <ProfileLayout title='PROFILe DeTAILS'><Details></Details></ProfileLayout> : <></>} */}
            {/* {route == 'dashboard' ?
                    <Dashboard />
                : <></>} */}
            {route == 'myRealm' ?
                <WrapperTexture>
                    <MyRealm data={dataMyRealm} />
                </WrapperTexture>
                : <></>}
            {route == 'theVault' ?
                <WrapperTexture>
                    <TheVault />
                </WrapperTexture>
                : <></>}
            {/* {route == 'history' ?
                <WrapperTexture>
                    <HistoryView />
                </WrapperTexture>
                : <></>} */}
            {route == 'perks' ?
                <WrapperTexture>
                    <Perks cards={cards} />
                </WrapperTexture>
                : <></>}
            {route == 'settings' ?
                <WrapperTexture>
                    <Settings />
                </WrapperTexture>
                : <></>}
        </div>
    )
}