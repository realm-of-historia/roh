"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Digest from '@/components/Digest/Digest'
import SwitchBox from '@/components/UI/SwitchBox/SwitchBox'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import DetailsProfile from './sections/Details/Details'
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout'
import SignIn from './sections/SignIn/SignIn'
import Accounts from './sections/Accounts/Accounts'
import Preferences from './sections/Preferences/Preferences'
import Notifications from './sections/Notifications/Notifications'
import Deactivation from './sections/Deactivation/Deactivation'


const Settings = () => {
    return(
        <div>
            <Header></Header>
            <UserInfo></UserInfo>
            <UserNavigation></UserNavigation>
            <ProfileLayout title='PROFILe DeTAILS'><DetailsProfile></DetailsProfile></ProfileLayout>
            <ProfileLayout title='SIGN-IN MeTHOD'><SignIn></SignIn></ProfileLayout>
            <ProfileLayout title='CONNeCTeD ACCOUNTS'><Accounts></Accounts></ProfileLayout>
            <ProfileLayout title='eMAIL PReFeReNCeS'><Preferences></Preferences></ProfileLayout>
            <ProfileLayout title='NOTIFICATIONS'><Notifications></Notifications></ProfileLayout>
            <ProfileLayout title='DeACTIVATe ACCOUNT'><Deactivation></Deactivation></ProfileLayout>
            <Digest></Digest>
        </div>
    )
}

export default Settings