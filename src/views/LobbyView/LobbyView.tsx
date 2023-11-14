'use client'

import React from 'react'
import Header from '@/components/Header/Header'
import Lobby from '@/views/HomePage/screens/Lobby/Lobby'
import Digest from '@/components/Digest/Digest'
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from '@/components/Layout/Layout'
import HashAnchor from '@/components/HashAnchor/HashAnchor'
export interface StandardComponentProps {
    data?: any,
}
export default function LobbyView({ data }: StandardComponentProps) {
    return (
        <>
            <HashAnchor />
            <div style={{ overflowX: 'hidden' }}>
                {/* <Layout> */}
                <ParallaxProvider>
                    <Lobby data={data.data.attributes}></Lobby>
                </ParallaxProvider>
                {/* </Layout> */}
            </div>
        </>

    )
}