"use client"

import React from 'react'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import style from './HowItWorksTable.module.scss'
import Divider from '@/components/Divider/Divider'



const HowItWorksTable = ({ data }: any) => {

    return (
        <div className={style.container}>
            {
                data?.map((_: any, i: number) => (
                    <HowItWorksTableInfo key={i + 4342} data={_} />
                ))
            }
        </div>

    )
}

const HowItWorksTableInfo = ({ data }: any) => {
    const columnRef = useRef(null)

    useEffect(() => {
        if (columnRef.current) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: columnRef.current,
                    start: 'top top',
                    toggleActions: 'play none none reverse',
                    scrub: true,
                    pin: true,
                },
            });
        }
    }, [columnRef])
    return (
        <div ref={columnRef} className={style.main}>
            <div className={style.wrapperInfo}>
                <div className={style.wrapperInfoContainer}>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <Divider position={'bottom right'}  />
                <Divider position={'bottom left'}  />
                </div>
            </div>
            {/* <Divider position={'bottom left'} horizontal={true} /> */}
            <Divider position={'top left'} horizontal={true} />
        </div>
    )
}

export default HowItWorksTable