"use client"

import React from 'react'
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

export default function page() {
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
        <>
            <WrapperTexture>
                <PerksComponent cards={cards}></PerksComponent>
            </WrapperTexture>
        </>
    )
}