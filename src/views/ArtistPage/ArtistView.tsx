"use client"

import React from 'react'
import Artist from './ArtistPage/ArtistPage'
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
                <WrapperTexture key={index + 342112}>
                    <Artist
                        item={element.attributes.work}
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