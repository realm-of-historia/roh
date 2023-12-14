'use client'

import CarahungeX from "@/components/CollectionsComponents/CarahungeX/CarahungeX"
import HashAnchor from "@/components/HashAnchor/HashAnchor"
import UserLayout from "@/components/UserLayout/UserLayout"
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import TheVault from "@/views/UserPage/screens/TheVault/TheVault"
import { useRouter } from "next/navigation"


const TheVaultPageCarahungeX = () => {
    const dataCarahungeX = {
        header: 'Carahunge x',
        date: 'Mint on Aug 11, 2023',
        button: 'Show more',
    }
    const router = useRouter()

    let funActive = () => {
        router.push('/user/the-vault')
    }
    return (
        <>
            <WrapperTexture>
                <CarahungeX data={dataCarahungeX} fun={funActive} />
            </WrapperTexture>
        </>
    )
}
export default TheVaultPageCarahungeX