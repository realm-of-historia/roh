"use client"

import React, { useMemo, useState } from 'react'
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
import fs from '../../../public/fsVww.svg'
export interface StandardComponentProps {
  data?: any,
}
const Header = ({ data }: StandardComponentProps) => {
  // const [isSignedIn] = useAuthStore((state: any) => [state.isSignedIn])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const pathname = usePathname()
  const [token, setToken] = useState()
  const [isInit, setIsInit] = useState(false)
  const [activeWindow, setActiveWindow] = useState(false)
  const { innerWidth }: number | any = useWindowSize();
  const isMint = useAuthStore((state: any) => (state.isMint))

  const handleAuth = () => {
    authConfig.connect();
    handleAuths()
  }
  useEffect(() => {
    if (innerWidth > 1080) {
      useAuthStore.setState({ isBurger: false })
    }
  }, [innerWidth])
  const handleAuths = () => {
    setTimeout(() => {
      let image_icon : any = document.querySelector(".w3a-button--primary img");
      // let image_iconHover : any = document.querySelector(".w3a-button--primary :nth-child(2)");
      let image_iconH : any = document.querySelector(".w3a-button--primary :nth-child(2)");
      let image_iconH2 : any = document.querySelector(".w3a-button--primary :nth-child(1)");
      if(!image_icon && !image_iconH){return}
        image_icon.src = '/fsVww.svg'
        // image_iconHover.src = '/fsVww.svg'
        image_iconH.src = image_iconH2.src
        console.log(image_iconH2)


    }, 1)
  }

  useEffect(() => {
    let element = document.getElementById("body");
    if (activeWindow && element) {
      element.style.cssText = 'overflow: hidden; height: 100vh;'
    }
    if (!activeWindow && element) {
      element.style.cssText = 'overflow: visible; height: auto;'
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

  authConfig.on(ADAPTER_EVENTS.CONNECTED, (data: any) => {
    setIsSignedIn(true)
    useAuthStore.setState(({isSignedIn: true}))
  })

  authConfig.on(ADAPTER_EVENTS.DISCONNECTED, (data: any) => {
    setIsSignedIn(false)
    useAuthStore.setState(({isSignedIn: false}))
  })

  authConfig.on(ADAPTER_EVENTS.ERRORED, (error) => {
    console.log("error", error);
  });


  useEffect(() => {
    if (isSignedIn) {
      const test = solanaWeb3.Keypair.generate()

      const solAuthJSON = generateSolAuthJSON(test);
      const confirmResult = confirmSolAuthJSON(solAuthJSON);



      fetch('https://api.realmofhistoria.com/api/web3auth/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(solAuthJSON),
      })
        .then(response => response.json())
        .then(data => {
          setToken(data.token)
          console.log(data.token)
        })
        .catch(error => {
          console.error("ошибка:", error);
        });
    }
  }, [isSignedIn])


  useEffect(() => {
    if (pathname.indexOf('/user') === 0 && !isSignedIn) {
      redirect('/')
    }
  }, [pathname, isSignedIn])


  useEffect(() => {
    if(pathname === '/mint') {
      useAuthStore.setState({isMint: true})
    } else{
      useAuthStore.setState({isMint: false})
    }
    console.log(pathname, isMint)
  })

  const handler = (href: any) => {
    window.open(href)
  }

  return (
    <>
      {
        data?.networks &&
        <div className={styles.header}>
          <img src="/texture.png" className={styles.texture} width={1920} height={800} alt="" />
          <Burger networks={data?.networks} link={data?.link} button={data?.button} />
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
            {!isMint && <Link href='/mint'><button className={styles.button}>{data?.button}</button></Link>}
          </div>
          <div className={styles.right}>
            <Divider position={'left top'} />
            {!isMint && <Link href='/mint'><button className={`${styles.button} ${styles.buttonMob}`}>{data?.button}</button></Link>}
            {!isSignedIn ? <div className={styles.signin}><p className={styles.logIn} onClick={handleAuth}>{data?.buttonSignIn}</p></div> : <div className={styles.logIn}></div>}
            {isSignedIn ? <Avatar
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