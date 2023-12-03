"use client"

import React, { useEffect, useState } from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout'
import Digest from '@/components/Digest/Digest'
import Details from '@/views/UserPage/screens/UserInfo/sections/Details/Details'
import UserLayout from '@/components/UserLayout/UserLayout'
import HashAnchor from '@/components/HashAnchor/HashAnchor'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import Perks from '@/views/UserPage/screens/Perks/Perks'
import PerksComponent from '@/views/UserPage/screens/Perks/PerksComponent/PerksComponent'
import { useUserFetch } from '@/composable/useApiFetch'
import { useAuthStore } from '@/store/store'

export default function PerksPage() {
    const token = useAuthStore((state: any) => (state.token))
    const [data, setData] = useState()
    useEffect(() => {
        if (!token) { return }
        const FetchData = async (token: any) => {
          const dataUser = await useUserFetch('api/perks/available/', token)
          return dataUser
        }
        const fetchDataAndLog = async () => {
          const result = await FetchData(token);
          setData(result);
        };
        fetchDataAndLog()
      }, [token])
    
    return(
        <>
            <WrapperTexture>
                <PerksComponent cards={data}></PerksComponent>
            </WrapperTexture>
        </>
    )
}