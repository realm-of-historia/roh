"use client"

import React, { useState } from 'react'
import styles from './Header.module.scss'
import Icon from '../UI/Icon/Icon'
import Avatar from './Avatar/Avatar'
import Link from 'next/link'
import Text from '../Text/Text'
import {useAuthStore} from '../../store/store'
import authConfig from '../../authConfig/authConfig'
import { useEffect } from 'react'
import {ADAPTER_EVENTS} from '@web3auth/base'
import { redirect, usePathname } from 'next/navigation'
const { generateSolAuthJSON, confirmSolAuthJSON } = require('sol-auth-json');
const solanaWeb3 = require('@solana/web3.js');

import ImageMy from '../Image/ImageMy'
import Divider from '../Divider/Divider'

export interface StandardComponentProps {
  data?: any
}
const Header = ({data} : StandardComponentProps) => {

  // const [isSignedIn] = useAuthStore((state: any) => [state.isSignedIn])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [keypair, setKeypair]:any = useState()
  const pathname = usePathname()
  const [token, setToken] = useState()
  const [isInit, setIsInit] = useState(false)

  const handleAuth = () => {
    authConfig.connect();
    console.log(authConfig.connected)
  }

  useEffect(() => {
    setTimeout(() => {
      if(!isInit) {
        authConfig.initModal();
        setIsInit(true)
        console.log(isInit)
      }
    }, 3500)
  }, [])


  //listeners

  authConfig.on(ADAPTER_EVENTS.CONNECTED, (data: any) => {
    setIsSignedIn(true)
  })

  authConfig.on(ADAPTER_EVENTS.DISCONNECTED, (data: any) => {
    setIsSignedIn(false)
  })

  authConfig.on(ADAPTER_EVENTS.ERRORED, (error) => {
    console.log("error", error);
  });



  useEffect(() => {
    if(isSignedIn){
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
    if(pathname.indexOf('/user') === 0 && !isSignedIn) {
      redirect('/')
    }
  }, [pathname])
  


  console.log(data)

  return (
    <div className={styles.header}>
        {/* <div className={styles.leftDivider}></div> */}
        {/* <div className={styles.rightDivider}></div> */}
        <div className={styles.bottomDivider}></div>
        <picture className={styles.wrapperLogo}>
            <Link href="/" className={styles.logoImage}><ImageMy alt='' width={92} height={38} src={data?.logo.data.attributes.url}/></Link>
            <Divider position={'right top'}/>
        </picture>
        <div className={styles.navigation}>
           {
            data?.link.map((_ : any, i : number) => (
              <Link key={i + 321} href={_.href || '/'}><p>{_.name}</p></Link>
            ))
           }
        </div>
        {/* <div> */}

        <div className={styles.right}>
          <Divider position={'left top'}/>
           {!isSignedIn ? <Link href="/"><p className={styles.logIn} onClick={handleAuth}>Log In</p></Link> : <div className={styles.logIn}></div>}
           {!isSignedIn ? <Link href="/"><p className={styles.signIn} onClick={handleAuth}>Register</p></Link> : <div></div>}
            {/* <div className={styles.icons}>
               <Icon label='search-icon'></Icon>
               <Icon label='message-icon'></Icon>
               <Icon label='theme-icon'></Icon>
            </div> */}
            {isSignedIn ? <Avatar></Avatar> : <div></div>}
        </div>
        {/* </div> */}
    </div>
  )
}

export default Header