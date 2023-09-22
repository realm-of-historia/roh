import React from 'react'
import Header from '@/components/Header/Header'
import Lobby from '@/views/HomePage/screens/Lobby/Lobby'
import Digest from '@/components/Digest/Digest'

export default function LobbyPage() {
    return(
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <Lobby></Lobby>
            <Digest></Digest>
        </div>
    )
}