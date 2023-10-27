'use client'

import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '@/Loading/Loading';

export const DelayContext = createContext({loaded : false})

export const ProviderDelay = ({children}) => {

    const pathname = usePathname()
    const [isLoaded, setIsLoaded] = useState(false)
    const [isOpacity, setIsOpacity] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
        setIsOpacity(true)
        // setTimeout(() => {
        //     setIsLoaded(false)
        //     clearTimeout()
        // }, 3700)
        setTimeout(() => {
            setIsOpacity(false)
            clearTimeout()
        }, 3000)
    }, [pathname])
    
    return(
        <DelayContext.Provider>
            <Loading isOpacity={isOpacity}></Loading>
            {children}
        </DelayContext.Provider>
    )
}
