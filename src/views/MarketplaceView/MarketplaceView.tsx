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
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'


export default function MarketplaceView({data} : {data : any}) {
    const { ref, inView } = useInView()
    console.log(data)
    const endRef = useRef(null)
    const firstRef = useRef(null)
    const secondRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    const [cards, setCards]: Array<any> = useState([])
    const [isLoader, setIsLoader] = useState(false)
    const [cardNumber, setCardNumber] = useState(0)


    const allCards: Array<any> = [<Marketplace key={Math.random()} isMarket={true} ></Marketplace>, <Marketplace key={Math.random()} isMarket={true} ></Marketplace>, <Marketplace key={Math.random()} isMarket={true} ></Marketplace>, <Marketplace key={Math.random()} isMarket={true} ></Marketplace>]

    useEffect(() =>{
        if(inView && cardNumber < 4 && !isLoader) {
            setIsLoader(true)
            setTimeout(() =>{
                setCards(
                    [cards, allCards[cardNumber]]
                )
                setCardNumber(cardNumber + 1)
                setIsLoader(false)
                
                setTimeout(() => {
                    ScrollTrigger.refresh()
                }, 30)
            }, 2000)
        }
    }, [inView])


    return(
        <div style={{overflowX: 'hidden'}}>
            {/* <Header></Header> */}
            <MarketplaceTitle title={data.data.attributes.title} />
            <Panegliph isFirst={false}></Panegliph>
            <Marketplace isMarket={true}></Marketplace>
            <Marketplace isMarket={true} ></Marketplace>
            {cards.map((element : any, index: any) => (
                <div key={index}>{element}</div>
            ))}
            {isLoader && <Loader></Loader>}
            <div style={{width: '100%', height: '1px'}} ref={ref}></div>
            {/* <Digest reff={ref}></Digest> */}
        </div>
    )
}