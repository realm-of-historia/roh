'use client'

import React from 'react'
import Header from '@/components/Header/Header'
import Panegliph from '@/components/Panegliph/Panegliph'
import Marketplace from '@/views/HomePage/screens/Marketplace/Marketplace'
import Digest from '@/components/Digest/Digest'
import MarketplaceTitle from '@/components/MarketplaceTitle/MarketplaceTItle'
import {useState, useRef, useEffect} from 'react'
import { gsap } from 'gsap';

export default function MarketplacePage() {

    const [showSecondMarketplace, setShowSecondMarketplace] = useState(false);

    const endRef = useRef(null)
    const firstRef = useRef(null)
    const secondRef = useRef(null)


    useEffect(() => {
        // Анимация для появления firstRef
        gsap.from(endRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: firstRef.current,
            start: 'top bottom', // Начать анимацию, когда верхняя граница firstRef видна
            endTrigger: secondRef.current, // Завершить анимацию при достижении secondRef
            end: 'top bottom',
            scrub: 1,
          },
        });
    
        // Анимация для появления secondRef
        gsap.from(secondRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: secondRef.current,
            start: 'top bottom', // Начать анимацию, когда верхняя граница secondRef видна
            scrub: 1, // "Scrub" значит, что анимация будет привязана к скроллу
          },
        });
      }, []);
    



    return(
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <MarketplaceTitle></MarketplaceTitle>
            <Panegliph isFirst={false}></Panegliph>
            <Marketplace isMarket={true}></Marketplace>
            <Marketplace isMarket={true} ref={endRef}></Marketplace>
            <Marketplace isMarket={true} ref={firstRef}></Marketplace>
            <Marketplace isMarket={true} ref={secondRef}></Marketplace>            
            <Digest></Digest>
        </div>
    )
}