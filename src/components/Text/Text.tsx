"use client";

import React, { useEffect, useRef, memo, useMemo } from 'react'
import styles from './Text.module.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';

interface text {
    yMove?: number,
    children?: any,
}

gsap.registerPlugin(ScrollTrigger)


const Text: NextPage<text> = memo(function Text({children, yMove}) {
    const [ref, inView] = useInView()
    const textRef = useRef<HTMLDivElement>(null);
    const styleText : any = useMemo(() => {
      const innerStyle = {
        opacity: inView ? '1' : '0',
        transform: inView ? 'translate( 0 , 0)' : 'translate( 0 , 1rem)',
        transition: inView ? ` opacity ease 0.75s, transform ease 0.75s` : '0s',
    }
    return(innerStyle)
    },[inView])
    // useEffect(() => {
    //     if (textRef.current) {
    //       const timeline = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: textRef.current,
    //           start: 'top bottom',
    //           toggleActions: 'play reset play reset',
    //         },
    //       });



    //       timeline.from(textRef.current, {
    //         opacity: 0,
    //         autoAlpha: 0,
    //         y: yMove ? yMove : 30,
    //         duration: 0.75,
    //         ease: 'power1.inOut',
    //         // filter: 'blur(5px)',
    //       });
    //     }

    //   }, []);
    
      // return <div className={styles.text} ref={textRef}>{children}</div>;
      return <div style={styleText} ref={ref}>{children}</div>;

    });
  

export default Text