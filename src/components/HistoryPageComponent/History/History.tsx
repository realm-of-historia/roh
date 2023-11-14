"use client"
import React from 'react'
import styles from './History.module.scss'
// import Title from '@/components/Title/Title'
import Text from '@/components/Text/Text'
import { gsap } from 'gsap'
import HorizontalScroll from '@/components/UI/HorizontalScroll/HorizontalScroll'
import List from './List/List'
import Markdown from 'react-markdown'


const History = ({data} : any) => {

    const triggerRef : any = React.useRef()
    const titleRef = React.useRef()
    const listRef = React.useRef()
    React.useEffect(() => {
        if (window.innerWidth > 576) {
            if (triggerRef.current && titleRef.current && listRef.current ) {
                setTimeout(() => {
                    // @ts-expect-error
                    gsap.to(titleRef.current,
                        {
                            // @ts-expect-error
                            x: () => listRef.current.getBoundingClientRect().width - triggerRef.current.getBoundingClientRect().width,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: triggerRef.current,
                                start: "top top",
                                end: "bottom bottom",
                                scrub: true,
                                invalidateOnRefresh: true
                            },
                        }
                    );
                }, 30)
            }
        }
    }, [])

  return (
    <HorizontalScroll
        // @ts-expect-error
        ref={triggerRef}
    >
        <div className={styles.main}>
            <div ref={titleRef as any} className={styles.left}>
                <div>
                    <p>
                        {data?.carahungeHistory}
                    </p>
                </div>
                <div>
                    {/* <p>
                        According to recent excavations, the Zorats Karer (Carahunge) site has a history of <span>7500 years.</span> Its discovery has sparked a scientific debate in astronomical and astrological circles.
                    </p> */}
                    <Markdown>{data?.carahungeHistorySubtitle}</Markdown>
                </div>
            </div>
            <div ref={listRef as any} className={styles.right}>
                <div>
                    <div className={styles.divider}></div>
                        {data?.carahunge.map((list: any, i : number) => (
                            <List key={i + 8823} title={list.title} message={list.meaning}/>
                        ))}
                </div>
            </div>
        </div>
    </HorizontalScroll>
  )
}

export default History