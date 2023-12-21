"use client"

import React, { useState } from 'react'
import styles from './Header.module.scss'
import Avatar from './Avatar/Avatar'
import Link from 'next/link'
import { useAuthStore } from '../../store/store'
import authConfig from '../../authConfig/authConfig'
import { useEffect } from 'react'
import { ADAPTER_EVENTS } from '@web3auth/base'
import { redirect, usePathname } from 'next/navigation'
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import ImageMy from '../Image/ImageMy'
import Divider from '../Divider/Divider'
import { useWindowSize } from 'rooks';
import Burger from './Avatar/components/Burger/Burger'
import { useAuth } from '@/views/MintPage/hooks/useAuth'

export interface StandardComponentProps {
    data?: any,
}

const Header = ({ data }: StandardComponentProps) => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const pathname = usePathname()
    const [activeBurger, setActiveBurger] = useState(false)

    const [isInit, setIsInit] = useState(false)
    const [activeWindow, setActiveWindow] = useState(false)

    const { innerWidth }: number | any = useWindowSize();
    const isMint = useAuthStore((state: any) => (state.isMint))

    const [isDev, setIsDev] = useState(false)

    const { auth, signer } = useAuth()

    useEffect(() => {
        if (innerWidth > 1080) {
            useAuthStore.setState({ isBurger: false })
        }
        if (pathname) {
            useAuthStore.setState({ isBurger: false })
        }


    }, [innerWidth, pathname])
    useEffect(() => {
        if (innerWidth <= 1080) {
            setActiveBurger(true)
        } else {
            setActiveBurger(false)
        }
    }, [innerWidth])

    useEffect(() => {
        let element = document.getElementById("body");
        if (activeWindow && element) {
            // element.style.cssText = 'overflow: hidden; height: 100vh;'
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.height = '100%';
            document.documentElement.style.position = 'relative';
        }
        if (!activeWindow && element) {
            // element.style.cssText = 'overflow: visible; height: auto;'
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
            document.documentElement.style.position = '';
        }
    }, [activeWindow])


    authConfig.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
        if (isVisible) {
            setActiveWindow(true)
        } else {
            setActiveWindow(false)
        }
    });

    useEffect(() => {
        setTimeout(() => {
            if (!isInit) {
                authConfig.initModal();
                setIsInit(true)
            }
        }, 3500)
    }, [])

    authConfig.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        setIsSignedIn(false)
        useAuthStore.setState(({ isSignedIn: false }))
    })

    useEffect(() => {
        if (signer) {
            const user = JSON.stringify({
                wallet: signer.publicKey,
                signature: ' '
            })

            fetch('https://api.realmofhistoria.com/api/web3auth/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer`,
                    'Content-Type': 'application/json',
                },
                body: user,
            })
                .then(response => response.json())
                .then(data => {
                    useAuthStore.setState({ token: data.token })
                    setIsSignedIn(true)
                    useAuthStore.setState(({ isSignedIn: true }))
                })
                .catch(error => {
                    console.error("ошибка:", error);
                });
        }
    }, [signer])

    useEffect(() => {
        if (pathname.indexOf('/user') === 0 && !isSignedIn) {
            redirect('/')
        }
    }, [pathname, isSignedIn])


    useEffect(() => {
      if (pathname === '/mint') {
        useAuthStore.setState({ isMint: true })
      } else {
        useAuthStore.setState({ isMint: false })
      }
  
  
      if(window.location.search.includes('?type=demo')){
        setIsDev(true)
      } else{
        setIsDev(false)
      }
    }, [pathname])

    const handler = (href: any) => {
        window.open(href)
    }

    return (
        <>
            {
                data?.networks &&
                <div className={styles.header}>
                    <img src="/texture.webp" className={styles.texture} width={1920} height={800} alt="" />
                    <Burger hideButtonBuy={data?.hideButtonBuy} networks={data?.networks} link={data?.link} button={data?.button} linkauthorized={data?.authorizedUserBurger} />
                    <div className={styles.bottomDivider}></div>
                    <div className={styles.wrapperLogoNetworks}>
                        <picture className={styles.wrapperLogo}>
                            <Link href="/" className={styles.logoImage}><ImageMy alt='' width={92} height={38} src={data?.logo.data.attributes.url} priority={true} /></Link>
                            <Divider position={'right top'} />
                        </picture>
                        {
                            data?.networks.map((_: any, i: number) => (
                                <div key={i + 762} onClick={() => handler(_.href)} className={styles.iconHeader}>
                                    <ImageMy src={_.icon.data.attributes.url} width={24} height={24} alt='' priority={true} />
                                    <Divider position={'right top'} />
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.navigation}>
                        {
                            data?.link.map((_: any, i: number) => (
                                <Link key={i + 321} href={_.href || '/'}><p>{_.name}</p></Link>
                            ))
                        }
                        {!isMint && !data?.hideButtonBuy && <Link href='/mint'><button className={styles.button}>{data?.button}</button></Link>}
                    </div>
                    <div className={styles.right}>
                        <Divider position={'left top'} />
                        {!isMint && !data?.hideButtonBuy && <Link href='/mint'><button className={`${styles.button} ${styles.buttonMob}`}>{data?.button}</button></Link>}
                        {/* {!isSignedIn ? <div className={styles.signin}><p className={styles.logIn} onClick={auth}>{data?.buttonSignIn}</p></div> : <div className={styles.logIn}></div>} */}
                        {!isSignedIn && (!data?.hideButtonSignIn || isDev) ? <div className={styles.signin}><p className={styles.logIn} onClick={auth}>{data?.buttonSignIn}</p></div> : <div className={styles.logIn}></div>}
                        {activeBurger ? <Avatar
                        data={data?.authorizedUserMenu}
                        logOut={data?.bottonLogOut}
                        searchIcon={data?.searchIcon?.data.attributes.url}
                        support={data?.support?.data.attributes.url}
                        subject={data?.subject?.data.attributes.url}></Avatar>
                        : <div></div>}
                        {(isSignedIn && !activeBurger) ? <Avatar
                        data={data?.authorizedUserMenu}
                        logOut={data?.bottonLogOut}
                        searchIcon={data?.searchIcon?.data.attributes.url}
                        support={data?.support?.data.attributes.url}
                        subject={data?.subject?.data.attributes.url}></Avatar>
                        : <div></div>}
                    </div>
                </div>
            }
        </>

    )
}

export default Header