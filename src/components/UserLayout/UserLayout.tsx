import React from 'react'
import Header from '../Header/Header'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Digest from '../Digest/Digest'
import { useAuthStore } from '@/store/store'
import Details from '@/views/UserPage/screens/UserInfo/sections/Details/Details'
import HistoryView from '@/views/UserPage/screens/History/History'
import Perks from '@/views/UserPage/screens/Perks/Perks'
import Settings from '@/views/UserPage/screens/Settings/Settings'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import ProfileLayout from '../ProfileLayout/ProfileLayout'
import Dashboard from '@/views/UserPage/screens/Dashboard/Dashboard'


export default function UserLayout() {
    
    const route = useAuthStore((state) => (state.userRoute))

    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
            <UserNavigation></UserNavigation>
            {route == 'personal' ? <ProfileLayout title='PROFILe DeTAILS'><Details></Details></ProfileLayout> : <></>}
            {route == 'dashboard' ? <Dashboard></Dashboard> : <></>}
            {route == 'history' ? <HistoryView></HistoryView> : <></>}
            {route == 'perks' ? <Perks></Perks> : <></>}
            {route == 'settings' ? <Settings></Settings> : <></>}
            <Digest></Digest>
        </div>
    )
}