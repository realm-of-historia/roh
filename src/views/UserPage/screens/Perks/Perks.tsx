"use client"

import React from 'react'
import UserInfo from '@/views/UserPage/screens/UserInfo/UserInfo'
import Header from '@/components/Header/Header'
import UserNavigation from '@/views/UserPage/screens/UserInfo/UserNavigation/UserNavigation'
import Digest from '@/components/Digest/Digest'
import Payment from '@/views/UserPage/screens/Dashboard/Payment/Payment'
import PerksComponent from '@/views/UserPage/screens/Perks/PerksComponent/PerksComponent'
import HashAnchor from '@/components/HashAnchor/HashAnchor'

export default function Perks() {

    const cards = [
        ['Product 1', '01244009', '25', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '26', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '27', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '28', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '29', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '30', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '31', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '32', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '33', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '34', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '35', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '36', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '37', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '38', '51,00', 'Published', 'Actions'],
        ['Product 1', '01244009', '39', '51,00', 'Published', 'Actions'],
    ]

    return(
        <div>
                <HashAnchor />
            <UserNavigation></UserNavigation>
            <PerksComponent cards={cards}></PerksComponent>
        </div>
    )
}