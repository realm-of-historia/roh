"use client"

import React, { useMemo, useState } from 'react'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import styles from './Header.module.scss'
import Icon from '../UI/Icon/Icon'
import Avatar from './Avatar/Avatar'
import Link from 'next/link'
import Text from '../Text/Text'
import { useAuthStore } from '../../store/store'
import authConfig from '../../authConfig/authConfig'
import { useEffect } from 'react'
import { ADAPTER_EVENTS } from '@web3auth/base'
import { redirect, usePathname } from 'next/navigation'
const solanaWeb3 = require('@solana/web3.js');
import { generateSolAuthJSON, confirmSolAuthJSON } from '../../sol-auth-json/index'
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import ImageMy from '../Image/ImageMy'
import Divider from '../Divider/Divider'
import { useWindowSize } from 'rooks';
import Burger from './Avatar/components/Burger/Burger'
import WrapperTexture from '../WrapperTexture/WrapperTexture'
import { useUserFetch } from '@/composable/useApiFetch'
import { Keypair } from '@solana/web3.js';

export interface StandardComponentProps {
  data?: any,
}

export const handleAuth = () => {
  // authConfig.connect();
  signIn(undefined, { callbackUrl: '/', redirect: true }) //{callbackUrl: 'http://localhost:3000/'} callbackUrl: 'https://roh-self.vercel.app'
  handleAuths()
}
const handleAuths = () => {
  setTimeout(() => {
    let image_icon: any = document.querySelector(".w3a-button--primary img");
    // let image_iconHover : any = document.querySelector(".w3a-button--primary :nth-child(2)");
    let image_iconH: any = document.querySelector(".w3a-button--primary :nth-child(2)");
    let image_iconH2: any = document.querySelector(".w3a-button--primary :nth-child(1)");
    let subtitle: any = document.querySelector(".w3a-header__subtitle");
    let input: any = document.querySelector(".w3a-text-field");
    let cross: any = document.querySelector(".w3ajs-close-btn img");
    if (!image_icon && !image_iconH && !subtitle && !input && !cross) { return }
    image_icon.src = '/fsVww.svg'
    // image_iconHover.src = '/fsVww.svg'
    image_iconH.src = image_iconH2.src
    subtitle.innerText = 'Embark on a journey of discovery.'
    input.placeholder = 'name@example.com'
    cross.src = '/radix-icons_cross-1.svg'


  }, 1)
}
const Header = ({ data }: StandardComponentProps) => {
  const [isSignedIn] = useAuthStore((state: any) => [state.isSignedIn])
  const pathname = usePathname()
  const [activeBurger, setActiveBurger] = useState(false)
  const [isInit, setIsInit] = useState(false)
  const [activeWindow, setActiveWindow] = useState(false)

  const { innerWidth }: number | any = useWindowSize();
  const isMint = useAuthStore((state: any) => (state.isMint))
  const [isDev, setIsDev] = useState(false)  

  const {data: session} = useSession()
  const [fetchedSession, setFetchedSession]: any = useState()

  const projectId = "1b6866d4-3236-42e9-83a2-f376668316e9";
  const clientSecret = "sk_test.758515a4.81408c4fb94a9d32c6449756a12fe1d9";

  
 
  useEffect(() => {
    if (innerWidth > 1080) {
      useAuthStore.setState({ isBurger: false })
    }
    if(pathname){
      useAuthStore.setState({ isBurger: false })
    }
    

  }, [innerWidth, pathname])
  
  useEffect(() => {
    if(innerWidth <= 1080){
      setActiveBurger(true)
    } else {
      setActiveBurger(false)
    }
  },[innerWidth])
 
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

  //listeners


  useEffect(() => {
    // console.log(fetchedSession)
    if (fetchedSession?.wallets) {

      // console.log(fetchedSession)

      const authTest = {
        wallet: fetchedSession?.wallets.solana,
        signature: "lexxTheBest"
      }


      fetch('https://api.realmofhistoria.com/api/web3auth/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authTest),
      })
        .then(response => response.json())
        .then(data => {
          // setToken(data.token)
          // console.log(data)
          if(data.token) {
            useAuthStore.setState({ token: data.token, isSignedIn: true })
            // console.log(data.token)
          }
        })
        .catch(error => {
          console.error("ошибка:", error);
        });


    }
  }, [fetchedSession])


  useEffect(() => {
    const fetchData = async () => {
      const userSession: any = await getSession();
      // console.log(userSession)
      setFetchedSession(userSession)
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (pathname.indexOf('/user') === 0 && !fetchedSession) {
      redirect('/')
    }
  }, [pathname, fetchedSession])


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
          <Burger hideButtonBuy={data?.hideButtonBuy}  networks={data?.networks} link={data?.link} button={data?.button} linkauthorized={data?.authorizedUserBurger} />
          <div className={styles.bottomDivider}></div>
          <div className={styles.wrapperLogoNetworks}>
            <picture onClick={() => signOut} className={styles.wrapperLogo}>
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
            {/* <p>{fetchedSession?.user?.name}</p> */}
            {!isMint && !data?.hideButtonBuy &&  <Link href='/mint'><button className={styles.button}>{data?.button}</button></Link>}
          </div>
          <div className={styles.right}>
            <Divider position={'left top'} />
            {!isMint && !data?.hideButtonBuy && <Link href='/mint'><button className={`${styles.button} ${styles.buttonMob}`}>{data?.button}</button></Link>}
            {!fetchedSession && (!data?.hideButtonSignIn || isDev) ? <div className={styles.signin}><p className={styles.logIn} onClick={handleAuth}>{data?.buttonSignIn}</p></div> : <div className={styles.logIn}></div>}
            {/* { !fetchedSession && <div className={styles.signin}><p className={styles.logIn} onClick={handleAuth}>{data?.buttonSignIn}</p></div>} */}
            {activeBurger ? <Avatar
              data={data?.authorizedUserMenu}
              logOut={data?.bottonLogOut}
              searchIcon={data?.searchIcon?.data.attributes.url}
              support={data?.support?.data.attributes.url}
              subject={data?.subject?.data.attributes.url}></Avatar>
              : <div></div>}
              {(fetchedSession && !activeBurger) ? <Avatar
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