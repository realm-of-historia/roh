'use client'

import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '@/Loading/Loading';

export const DelayContext = createContext({loaded : false})

export const ProviderDelay = ({children}) => {

    const pathname = usePathname()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
        setTimeout(() => {
            setIsLoaded(false)
            clearTimeout()
            console.log(isLoaded)
        }, 3000)
        console.log(isLoaded)
    }, [pathname])
    
    return(
        <DelayContext.Provider>
            {isLoaded ? <Loading></Loading> : children}
        </DelayContext.Provider>
    )
}
