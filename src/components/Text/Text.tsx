"use client";

import React, { useEffect, useRef, memo } from 'react'
import styles from './Text.module.scss'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { NextPage } from 'next';

interface text {
    yMove?: number,
    children?: any,
}

gsap.registerPlugin(ScrollTrigger)


const Text: NextPage<text> = memo(function Text({children, yMove}) {

    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current) {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top bottom',
              toggleActions: 'play reset play reset',
            },
          });



          timeline.from(textRef.current, {
            opacity: 0,
            autoAlpha: 0,
            y: yMove ? yMove : 40,
            duration: 0.5,
            ease: 'power1.inOut',
            filter: 'blur(5px)',
          });
        }

      }, []);
    
      return <div className={styles.text} ref={textRef}>{children}</div>;
    });
  

export default Text