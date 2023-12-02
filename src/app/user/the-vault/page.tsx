'use client'

import CarahungeX from "@/components/CollectionsComponents/CarahungeX/CarahungeX"
import HashAnchor from "@/components/HashAnchor/HashAnchor"
import UserLayout from "@/components/UserLayout/UserLayout"
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import { useUserFetch } from "@/composable/useApiFetch"
import { useAuthStore } from "@/store/store"
import TheVault from "@/views/UserPage/screens/TheVault/TheVault"
import TheVaultTable from "@/views/UserPage/screens/TheVault/components/TheVaultTable"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const TheVaultPage = () => {
    const token = useAuthStore((state: any) => (state.token))
    const[data, setData] = useState()
    useEffect(() => {
        if (!token) { return }
        const fetchData = async (token: any) => {
          const dataUser = await useUserFetch('api/documents/available/', token)
          return dataUser
        }
        const fetchDataAndLog = async () => {
          const result = await fetchData(token);
          setData(result);
        };
        fetchDataAndLog()
      }, [token])
      console.log(data)
    return (
        <>
            <WrapperTexture>
                <TheVaultTable data={data}/>
            </WrapperTexture>
        </>
    )
}
export default TheVaultPage