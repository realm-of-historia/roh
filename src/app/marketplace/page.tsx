'use client'

import React from 'react'
import Header from '@/components/Header/Header'
import Panegliph from '@/components/Panegliph/Panegliph'
import Marketplace from '@/views/HomePage/screens/Marketplace/Marketplace'
import Digest from '@/components/Digest/Digest'
import MarketplaceTitle from '@/components/MarketplaceTitle/MarketplaceTItle'
import {useState, useRef, useEffect} from 'react'
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer'

export default function MarketplacePage() {
    const { ref, inView } = useInView()

    const endRef = useRef(null)
    const firstRef = useRef(null)
    const secondRef = useRef(null)

    const [cardsCount, setCardsCount] = useState(0)
    const [cards, setCards] = useState([])

    useEffect(() =>{
        if(inView) {
            setTimeout(() =>{
                setCards(
                    [<Marketplace isMarket={true} ref={firstRef}></Marketplace>]
                )
            }, 2000)
            console.log(cards)
        }
    }, [inView]) //setTimeout


    return(
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <MarketplaceTitle></MarketplaceTitle>
            <Panegliph isFirst={false}></Panegliph>
            <Marketplace isMarket={true}></Marketplace>
            <Marketplace isMarket={true} ref={endRef}></Marketplace>
            {cards.map((element : any) => (
                element
            ))}     
            <Digest reff={ref}></Digest>
        </div>
    )
}