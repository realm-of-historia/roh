"use client"

import { useMemo } from "react"
import { useInView } from "react-intersection-observer"

const Divider = ({ position, horizontal, animation, style = {}, duration = '2.4s' }: {position?: any, horizontal?: any, animation?: any, style?: any, duration?: any,}) => {
    const { ref, inView } = useInView()
    const isHorizontal = useMemo(() => !!horizontal, [horizontal])
    const positions = useMemo(() => { 
        const array = position.split(' ').map((key: any) => ({ [key]: 0 })) 
        const innerStyle = {
            position: 'absolute',
            width: isHorizontal ? (inView  ? '100%' : '0%') : '.0625rem',
            height: isHorizontal ? '.0625rem' : (inView  ? '100%' : '0%'),
            backgroundColor: '#EAD8B1',
            opacity: '1',
            transition: inView ? `width ${duration} ease, height ${duration} ease` : '1s',
        }

        return Object.assign({}, ...array, innerStyle, style)
    }, [position, isHorizontal, style, inView])


    return (
        <span ref={ref} style={positions}></span>
    )
}

export default Divider