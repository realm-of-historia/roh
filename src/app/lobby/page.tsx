'use client'

import React from 'react'
import Header from '@/components/Header/Header'
import Lobby from '@/views/HomePage/screens/Lobby/Lobby'
import Digest from '@/components/Digest/Digest'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function LobbyPage() {
    return(
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <ParallaxProvider>
                <Lobby></Lobby>
            </ParallaxProvider>
            <Digest></Digest>
        </div>
    )
}