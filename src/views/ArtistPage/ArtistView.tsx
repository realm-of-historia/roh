"use client"

import React from 'react'
import Header from '@/components/Header/Header'
import Digest from '@/components/Digest/Digest'
import Artist from './ArtistPage/ArtistPage'
import Layout from '@/components/Layout/Layout'
import HashAnchor from '@/components/HashAnchor/HashAnchor'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import HeritageDefault from '../HomePage/screens/Heritage/HeritageDefault'
import Heritage from '../HomePage/screens/Heritage/Heritage'

export default function ArtistView({ data }: { data: any }) {
    const dataHeritage = {
        name: data?.data.attributes.name,
        description: data?.data.attributes.description,
    }
    return (
        <div>
            <HashAnchor />
            <WrapperTexture>
                <Heritage data={dataHeritage} />
            </WrapperTexture>
            {data?.data.attributes.artists.data.map((element: any, index: number) => (
                <WrapperTexture>
                    <Artist
                        item={element.attributes.work}
                        key={index + 831}
                        avatar={element.attributes.avatar?.data.attributes.url}
                        name={element.attributes.name}
                        spec={element.attributes.class}
                        text={element.attributes.description} />
                </WrapperTexture>
            ))}
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
        </div>
    )
}