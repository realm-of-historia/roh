"use client"

import React from 'react'
import styles from './RunningLine.module.scss'
import {useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'

const RunningLine = ({ image='' }: { image?: string }) => {
  const { ref, inView } = useInView()
  const isRight = useRef(1);
  const velocity = useRef(1);
  const speed = useRef(1)
  // let isRight = 1
  const containerRef = useRef(null);
  const currentBackgroundPositionXRef = useRef(0);
  const currentScroll: any = useRef(0)
  // const content: any = containerRef.current;
  // content.style.backgroundImage = '/publications.png'
  useEffect(() => {
    if( !containerRef && !image ){
      return
    } else{
      const refContainer: any = containerRef.current
      refContainer.style.backgroundImage = `url(https://api.realmofhistoria.com${image})`
    }
  },[containerRef, image])


  const animateBackgroundPosition = (delta: any) => {
    // velocity.current = (speed.current / delta) != 0 ? speed.current * 2 / delta : 1
    

    const content: any = containerRef.current;
    if (content) {
      // currentBackgroundPositionXRef.current += 1 * isRight.current; //(velocity.current < 0 ? velocity.current * -1 : velocity.current)

      currentBackgroundPositionXRef.current += 0.3
      content.style.backgroundPositionX = `${currentBackgroundPositionXRef.current}px`;
    }
    // if(inView){
      requestAnimationFrame(animateBackgroundPosition);
    // } else {
    //   return
    // }
  };
  const handleScroll = () => {
    const truth = currentScroll.current <= window.scrollY
    // isRight.current = (truth ? 1 : -1);
    speed.current = window.scrollY - currentScroll.current
    currentScroll.current = window.scrollY || window.pageXOffset
  };

  useEffect(() => {
      // window.addEventListener('scroll', handleScroll);
      // if(!visibility) {return}
        requestAnimationFrame(animateBackgroundPosition);
      // return () => { window.removeEventListener('scroll', handleScroll)}
    //  else{
    //   cancelAnimationFrame(animateBackgroundPosition)
    //   return
    //  }
   
  }, []);
 

  return (
    <div className={`${styles.runningLine}`} ref={ref}>
        <div className={styles.content} ref={containerRef}></div>
    </div>
  )
}

export default RunningLine