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
import Loader from '@/components/Loader/Loader'

export default function MarketplacePage() {
    const { ref, inView } = useInView()

    const endRef = useRef(null)
    const firstRef = useRef(null)
    const secondRef = useRef(null)

    const [cards, setCards]: Array<any> = useState([])
    const [isLoader, setIsLoader] = useState(false)
    const [cardNumber, setCardNumber] = useState(0)


    const allCards: Array<any> = [<Marketplace isMarket={true} ></Marketplace>, <Marketplace isMarket={true} ></Marketplace>, <Marketplace isMarket={true} ></Marketplace>, <Marketplace isMarket={true} ></Marketplace>]

    useEffect(() =>{
        if(inView && cardNumber < 4 && !isLoader) {
            setIsLoader(true)
            setTimeout(() =>{
                setCards(
                    [cards, allCards[cardNumber]]
                )
                setCardNumber(cardNumber + 1)
                setIsLoader(false)
            }, 2000)
        }
    }, [inView])


    return(
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <MarketplaceTitle></MarketplaceTitle>
            <Panegliph isFirst={false}></Panegliph>
            <Marketplace isMarket={true}></Marketplace>
            <Marketplace isMarket={true} ></Marketplace>
            {cards.map((element : any, index: any) => (
                <div key={index * Math.random()}>{element}</div>
            ))}
            {isLoader && <Loader></Loader>}
            <Digest reff={ref}></Digest>
        </div>
    )
}