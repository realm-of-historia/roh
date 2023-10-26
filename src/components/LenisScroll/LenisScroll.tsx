"use client";

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from '@studio-freight/lenis'
import { useLayoutEffect } from 'react'

const LenisScroll = () => {

  
    const mounted = useRef<boolean>(false)
    useLayoutEffect(() => {
      if (mounted.current) { return }
      mounted.current = true
  
      gsap.registerPlugin(ScrollTrigger)
    }, [])
    return <></>
}

export default LenisScroll