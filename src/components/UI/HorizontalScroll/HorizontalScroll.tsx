"use client";

import { useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { memo } from "react";
import { gsap } from 'gsap';
import { forwardRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './HorizontalScroll.module.scss'
import { NextPage } from 'next';

interface scroll {
    children?: any,
}

// gsap.registerPlugin(ScrollTrigger);


const HorizontalScroll: NextPage<scroll> = forwardRef(function HorizontalScroll({ children }, outerRef) {
    const pinSpacerRef = useRef<HTMLDivElement>();
    const refScroll = useRef<HTMLDivElement>();
    const ref = useRef<HTMLDivElement>();
    const animation = useRef<gsap.core.Timeline>();
    useImperativeHandle(outerRef, () => pinSpacerRef.current)

    useEffect(() => {
        window.addEventListener('resize', onResize)
        function onResize() {
            if (!pinSpacerRef.current || !refScroll.current) { return }
            pinSpacerRef.current.style.height = `${refScroll.current.getBoundingClientRect().width - pinSpacerRef.current.getBoundingClientRect().width + window.innerHeight}px`
        }

        // animation.current?.kill()

        if (window.innerWidth > 576) {
            if (refScroll.current && ref.current && pinSpacerRef.current) {
                onResize()
    
                // @ts-expect-error
                animation.current = gsap.fromTo(
                    refScroll.current,
                    {
                        x: 0,
                    },
                    {
                        // @ts-expect-error
                        x: () => -(refScroll.current.getBoundingClientRect().width - ref.current.getBoundingClientRect().width),
                        scrollTrigger: {
                            // @ts-expect-error
    
                            trigger: () => pinSpacerRef.current,
                            start: () => "top top",
                            // @ts-expect-error
                            end: () => `+=${refScroll.current.getBoundingClientRect().width - ref.current.getBoundingClientRect().width}`,
                            scrub: true,
                            invalidateOnRefresh: true
                        },
                        ease: 'none'
                    }
                );
            }
        }
        

        return () => { window.removeEventListener('resize', onResize) }
    }, [])

    return (
        <div ref={pinSpacerRef as any} className={styles.pin}>
            <div ref={ref as any} className={styles.container}>
                <div ref={refScroll as any} className={styles.wrapper}>
                    {children}
                </div>
            </div>
        </div>
    )
})


export default memo(HorizontalScroll)