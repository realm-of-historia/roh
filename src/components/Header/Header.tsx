"use client"

import React from 'react'
import styles from './Header.module.scss'
import Icon from '../UI/Icon/Icon'
import Avatar from './Avatar/Avatar'
import Link from 'next/link'
import Text from '../Text/Text'
import {useAuthStore} from '../../store/store'
import ImageMy from '../Image/ImageMy'

export interface StandardComponentProps {
  data?: any
}
const Header = ({data} : StandardComponentProps) => {

  const [isSignedIn] = useAuthStore((state: any) => [state.isSignedIn])

  const handleAuth = () => {
    useAuthStore.setState({isSignedIn: !isSignedIn})
  }
  console.log(data)
  return (
    <div className={styles.header}>
        <div className={styles.leftDivider}></div>
        <div className={styles.rightDivider}></div>
        <div className={styles.bottomDivider}></div>
        <picture>
            <Link href="/" className={styles.logoImage}><ImageMy alt='' width={92} height={38} src={data?.logo.data.attributes.url}/></Link>
        </picture>
        <div className={styles.navigation}>
           {
            data?.link.map((_ : any, i : number) => (
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