'use client'

import React from 'react'
import styles from './Lobby.module.scss'
import Text from '@/components/Text/Text'
import Link from 'next/link'
import { NativeUnderpin } from '@/components/NativeUnderpin/NativeUnderpin'
import { useParallax } from "react-scroll-parallax";
import {useRef, useEffect} from 'react'
import { useRouter } from 'next/navigation'


const Lobby = ({isCircle} : {isCircle?: boolean}) => {

    const target = useRef(null);

    const router = useRouter()

    const handleAnimation = () =>  {
        router.push('/lobby');
    }

    const {ref: parallaxRef} = useParallax({
        speed: 10,
        targetElement: target.current,
      });


  return (
    // <NativeUnderpin amplitude={0.8}>
        <div className={styles.lobby} ref={target}>
            <img ref={parallaxRef} src='/Lobby.png' alt='' width={1920} height={800}/>
            <Text><p className={styles.title}>3D LOBBY</p></Text>
            {isCircle && <div className={styles.container}>
                <div className={styles.loader}>
                    <div className={styles.circleBig}></div>
                    <div className={styles.circleLittle}></div>
                    <div className={styles.firstLine}></div>
                    <div className={styles.secondLine}></div>
                    <div onAnimationEnd={handleAnimation} className={styles.circle}>
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
    // </NativeUnderpin>
  )
}

export default Lobby