'use client'

import React, { useState } from 'react'
import styles from './Lobby.module.scss'
import Text from '@/components/Text/Text'
import Link from 'next/link'
import { useParallax } from "react-scroll-parallax";
import {useRef, useEffect} from 'react'
import { useRouter } from 'next/navigation'


const Lobby = ({isCircle} : {isCircle?: boolean}) => {

    const target = useRef(null);

    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false)


    const handleAnimation = () =>  {
        router.push('/lobby');
    }

    const handleRestarter = () => {
        setIsHovered(true)
    }

    const handleHover = () => {
        setIsHovered(false)
    }

    const {ref: parallaxRef}: {ref: any} = useParallax({
        speed: 30,
        targetElement: target.current || undefined,
      });


  return (
    <div className={styles.lobby} ref={target}>
        <div ref={parallaxRef} className={styles.imageContainer}>
            <img src='/Lobby.png' alt='' width={1920} height={800}/>
        </div>
        <Text><p className={styles.title}>3D LOBBY</p></Text>
        {isCircle && <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.circleBig}></div>
                <div className={styles.circleLittle}></div>
                <div className={styles.firstLine}></div>
                <div className={styles.secondLine}></div>
                <div onAnimationEnd={handleAnimation} className={`${styles.circle}`} >
                </div>
            </div>
            <Link href="/lobby">
                <Text>
                    <p>
                        <span>Click to go</span>
                        <span>to the 3d lobby</span>
                    </p>
                </Text>
            </Link>
        </div>}
    </div>
  )
}

export default Lobby