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
    const circle: any = document.querySelector('circle');

    const startOffset = 342;
    const endOffset = 0;




    const router = useRouter()
    const [isHovered, setIsHovered] = useState(true)


    const handleAnimation = () =>  {
        router.push('/lobby');
    }

    const handleRestarter = () => {
        if(!isHovered){
            circle.style.transition = `stroke-dashoffset ${1000}ms linear`;
            circle.style.strokeDashoffset = 300;
            circle.style.transition = '';
            circle.style.strokeDashoffset = startOffset;
        }
    }

    const handleHover = () => {
        circle.style.transition = `stroke-dashoffset ${3000}ms linear`;
        circle.style.strokeDashoffset = endOffset;
        setIsHovered(true)
    }

    const {ref: parallaxRef}: {ref: any} = useParallax({
        speed: 10,
        targetElement: target.current || undefined,
      });


  return (
    <div className={styles.lobby} ref={target}>
        <div className={styles.imageContainer}>
            <img ref={parallaxRef} src='/Lobby.png' alt='' width={1920} height={800}/>
        </div>
        <Text><p className={styles.title}>3D LOBBY</p></Text>
        {isCircle && <div className={styles.container}>
            <div className={styles.loader} onMouseEnter={handleHover} onMouseMove={handleRestarter}>
                <div className={styles.circleBig}></div>
                <div className={styles.circleLittle}></div>
                <div className={styles.firstLine}></div>
                <div className={styles.secondLine}></div>
                {/* <span className={styles.svgCircle}>
                    <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="63" cy="63" r="62" stroke="#FBF6E8" stroke-width="2" fill="transparent"
                                stroke-dasharray="392" stroke-dashoffset="392">
                        </circle>
                    </svg>
                </span> */}
                {/* <div onAnimationEnd={handleAnimation} className={`${styles.circle}`} >
                </div> */}
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