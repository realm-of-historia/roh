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
import { generateSolAuthJSON, confirmSolAuthJSON } from 'sol-auth-json';
import { redirect, usePathname } from 'next/navigation'


const solanaWeb3 = require('@solana/web3.js');

export interface StandardComponentProps {
  data?: any
}
const Header = ({data} : StandardComponentProps) => {

  // const [isSignedIn] = useAuthStore((state: any) => [state.isSignedIn])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [keypair, setKeypair]:any = useState() //Это походу не нужно, перепроверить)
  const pathname = usePathname()
  const [token, setToken] = useState()

  const handleAuth = () => {
    authConfig.connect();
    console.log(authConfig.connected)
  }

  useEffect(() => {
    authConfig.initModal();
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
  


  return (
    <div className={styles.header}>
        <div className={styles.leftDivider}></div>
        <div className={styles.rightDivider}></div>
        <div className={styles.bottomDivider}></div>
        <picture>
            <Link href="/"><img className={styles.logoImage} alt='' width={92} height={38} src='/Logo (2).svg'/></Link>
        </picture>
        <div className={styles.navigation}>
           {/* <Link href="/"><p>Home</p></Link>
           <Link href="/about"><p>About Us</p></Link>
           <Link href="/contacts"><p>Contacts</p></Link>
           <Link href="/blog"><p>Blog</p></Link> */}
           {
            data?.map((_ : any, i : number) => (
              <Link key={i + 321} href={_.href}><p>{_.name}</p></Link>
            ))
           }
        </div>
        <div className={styles.right}>
           {!isSignedIn ? <Link href="/"><p className={styles.logIn} onClick={handleAuth}>Log In</p></Link> : <div className={styles.logIn}></div>}
           {!isSignedIn ? <Link href="/"><p className={styles.signIn} onClick={handleAuth}>Register</p></Link> : <div></div>}
            {/* <div className={styles.icons}>
               <Icon label='search-icon'></Icon>
               <Icon label='message-icon'></Icon>
               <Icon label='theme-icon'></Icon>
            </div> */}
            {isSignedIn ? <Avatar></Avatar> : <div></div>}
        </div>
    </div>
  )
}

export default Header