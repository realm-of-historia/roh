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
    const topRef = useRef(null)
    useEffect(() => {
        if (columnRef.current && topRef.current) {
            const topContain = topRef.current
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: columnRef.current,
                    // start: 'top center',
                    start: () => `top+=${-topContain.getBoundingClientRect().height} top`,
                    toggleActions: 'play none none reverse',
                    scrub: true,
                    pin: true,
                },
            });
        } 
    }, [columnRef, topRef])
    return (
        <div ref={columnRef} className={style.main}>
            <div ref={topRef} className={style.mainTop}></div>
            <div className={style.wrapperInfo}>
                <div className={style.wrapperInfoContainer}>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <Divider position={'bottom right'}  noAnim={true}/>
                <Divider position={'bottom left'} noAnim={true} />
                </div>
            </div>
            {/* <Divider position={'bottom left'} horizontal={true} /> */}
            <Divider position={'top left'} horizontal={true} noAnim={true}/>
        </div>
    )
}

export default HowItWorksTable