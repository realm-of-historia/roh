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
import crossSvg from './Avatar/components/Burger/Vector (1).svg'
import { generateSolAuthJSON } from '@/sol-auth-json'
import { useWallet } from '@solana/wallet-adapter-react'

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
    const signedMessage = useAuthStore((state: any) => (state.signedMessage))

    const [isDev, setIsDev] = useState(false)

    const { auth, signer} = useAuth()


    const handleAuth = () => {
        auth()
        
        setTimeout(() => {
            let image_icon: any = document.querySelector(".w3a-button--primary img");
            // let image_iconHover : any = document.querySelector(".w3a-button--primary :nth-child(2)");
            let image_iconH: any = document.querySelector(".w3a-button--primary :nth-child(2)");
            let image_iconH2: any = document.querySelector(".w3a-button--primary :nth-child(1)");
            let twitter: any = document.querySelector(".w3ajs-socials-adapters :nth-child(11) button img");
            let discord: any = document.querySelector(".w3ajs-socials-adapters :nth-child(4) button img");
            let facebook: any = document.querySelector(".w3ajs-socials-adapters :nth-child(2) button img");
            let subtitle: any = document.querySelector(".w3a-header__subtitle");
            let title: any = document.querySelector(".w3a-group__title");
            let input: any = document.querySelector(".w3a-text-field");
            let cross: any = document.querySelector(".w3ajs-close-btn img");
            if (!image_icon && !image_iconH && !subtitle && !input && !cross) { return }
            // image_icon.src = '/fsVww.svg'
            // image_iconHover.src = '/fsVww.svg'
            twitter.src= '/twitterIcon.svg'
            discord.src= '/discordIcon.svg'
            facebook.src= '/facebookIcon.svg'
            image_iconH.src = image_iconH2.src
            subtitle.innerText = 'Embark on a journey of discovery.'
            title.innerText = 'Email'
            input.placeholder = 'name@example.com'
            cross.src = '/radix-icons_cross-1.svg'
            // console.log(cross)
        
        
          }, 1)
    }

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

        console.log(signedMessage)

        setTimeout(() => {
            if (signer && signedMessage) {

                const signature = btoa(String.fromCharCode.apply(null, signedMessage));
    
    
                const user = JSON.stringify({
                    wallet: signer.publicKey,
                    signature: signature
                })
    
                fetch('https://api.realmofhistoria.com/api/web3auth/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: user,
                })
                    .then(response => response.json())
                    .then(data => {
                        useAuthStore.setState({ token: data.token })
                        console.log('token', data.token)
                        setIsSignedIn(true)
                        useAuthStore.setState(({ isSignedIn: true }))
                    })
                    .catch(error => {
                        console.error("ошибка:", error);
                    });
            }
        }, 700)

    }, [signedMessage, signer])

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
                        {!isSignedIn && (!data?.hideButtonSignIn || isDev) ? <div className={styles.signin}><p className={styles.logIn} onClick={handleAuth}>{data?.buttonSignIn}</p></div> : <div className={styles.logIn}></div>}
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