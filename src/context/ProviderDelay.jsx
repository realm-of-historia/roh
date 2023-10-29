'use client'

import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '@/Loading/Loading';

export const DelayContext = createContext({loaded : false})

export const ProviderDelay = ({children}) => {

    const pathname = usePathname()
    const [isLoaded, setIsLoaded] = useState(false)
    const [isOpacity, setIsOpacity] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [url, setUrl] = useState('.')

    useEffect(() => {
        let url = pathname.split('/')
        setUrl(url[1])
    },[pathname])

    useEffect(() =>{
        setUrl('/')
    }, [])
    
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
            setLoaded(true)
        }, 2000)
        setLoaded(false)
        console.log(pathname)
    }, [url])
    const styleChildren = useMemo(() => {
        const styles = {
            opacity: !loaded ? '0' : '',
            visibility: !loaded ? 'hidden' : 'visible',
        }
        return styles
    },[loaded])

    return(
        <DelayContext.Provider>
            <Loading isOpacity={isOpacity}></Loading>
            <div style={styleChildren}>
                {children}
            </div>
        </DelayContext.Provider>
    )
}
