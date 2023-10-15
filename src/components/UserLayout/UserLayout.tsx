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

    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
            <UserNavigation></UserNavigation>
            {route == 'personal' ? <ProfileLayout title='PROFILe DeTAILS'><Details></Details></ProfileLayout> : <></>}
            {route == 'dashboard' ? <Dashboard></Dashboard> : <></>}
            {route == 'history' ? <HistoryView></HistoryView> : <></>}
            {route == 'perks' ? <Perks cards={cards}></Perks> : <></>}
            {route == 'settings' ? <Settings></Settings> : <></>}
            <Digest></Digest>
        </div>
    )
}