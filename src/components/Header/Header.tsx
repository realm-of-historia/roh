import React from 'react'
import styles from './Header.module.scss'
import Icon from '../UI/Icon/Icon'
import Avatar from './Avatar/Avatar'
import Link from 'next/link'
import Text from '../Text/Text'


const Header = () => {


  return (
    <div className={styles.header}>
        <div className={styles.leftDivider}></div>
        <div className={styles.rightDivider}></div>
        <div className={styles.bottomDivider}></div>
        <picture>
            <Link href="/"><img className={styles.logoImage} alt='' width={92} height={38} src='/Logo.png'/></Link>
        </picture>
        <div className={styles.navigation}>
           <Link href="/"><p>Home</p></Link>
           <Link href="/"><p>History Section</p></Link>
           <Link href="/"><p>Perks</p></Link>
           <Link href="/"><p>Help</p></Link>
        </div>
        <div className={styles.right}>
           <Link href="/"><p>Log In</p></Link>
           <Link href="/"><p>Register</p></Link>
            <div className={styles.icons}>
               <Icon label='search-icon'></Icon>
               <Icon label='message-icon'></Icon>
               <Icon label='theme-icon'></Icon>
            </div>
            <Avatar></Avatar>
        </div>
    </div>
  )
}

export default Header