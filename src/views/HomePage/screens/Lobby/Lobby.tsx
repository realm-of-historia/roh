'use client'

import React, { useState } from 'react'
import styles from './Lobby.module.scss'
import Text from '@/components/Text/Text'
import Link from 'next/link'
import { useParallax } from "react-scroll-parallax";
import {useRef, useEffect} from 'react'
import { redirect, useRouter } from 'next/navigation'
import { set } from 'react-hook-form'
import { useInView } from 'react-intersection-observer'


const Lobby = ({isCircle} : {isCircle?: boolean}) => {

    const target = useRef(null);
    const circle: any = useRef(null)

    const [strokeDashOffset, setStrokeDashOffset] = useState(332)
    const {ref, inView} = useInView()



    const router = useRouter()
    const [isHovered, setIsHovered] = useState(true)


    const handleAnimation = () =>  {
        if(strokeDashOffset != 332) {
            router.push('/lobby');
        }
    }

    const handleRestarter = () => {
        setStrokeDashOffset(332)
    }

    const handleHover = () => {
        setStrokeDashOffset(0)

    }

    useEffect(() => {
        if(strokeDashOffset == 0) {
        }
    }, [strokeDashOffset])

    const {ref: parallaxRef}: {ref: any} = useParallax({
        speed: 10,
        targetElement: target.current || undefined,
      });


  return (
    <div className={styles.lobby} ref={target}>
        <div className={styles.imageContainer}>
            <img ref={parallaxRef} src='lobby.png' alt='' width={1920} height={800}/>
        </div>
        <div className={`${styles.titleContainer} ${inView ? styles.translation : ''}`}><p ref={ref} className={styles.title}>3D LOBBY</p></div>
        {isCircle && <div className={styles.container}>
            <div className={styles.loader} onMouseEnter={handleHover} onMouseLeave={handleRestarter}>
                <div className={styles.circleBig}></div>
                <div className={styles.circleLittle}></div>
                <div className={styles.firstLine}></div>
                <div className={styles.secondLine}></div>
                <span className={styles.svgCircle} ref={circle}>
                    <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="63" cy="63" r="62" stroke="#FBF6E8" strokeWidth="2" fill="transparent"
                                strokeDasharray="392" strokeDashoffset={strokeDashOffset} onTransitionEndCapture={handleAnimation}
                                style={{ transition: `stroke-dashoffset ${3000}ms linear` }}
                                onTransitionEnd={() => {
                                    if (strokeDashOffset === 0) {
                                      redirect('/lobby')
                                    }}}
                                >
                                    
                        </circle>
                    </svg>
                </span>
            </div>
            <Link href="/lobby">
                <div className={`${inView ? styles.translation : ''} ${styles.linkContainer}`}>
                    <p>
                        <span>Click to go</span>
                        <span>to the 3d lobby</span>
                    </p>
                </div>
            </Link>
        </div>}
    </div>
  )
}

export default Lobby