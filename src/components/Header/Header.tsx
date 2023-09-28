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
            <img className={styles.logoImage} alt='' width={92} height={38} src='Logo.png'/>
        </picture>
        <div className={styles.navigation}>
            <Text yMove={10}><Link href="/"><p>Home</p></Link></Text>
            <Text yMove={10}><Link href="/"><p>History Section</p></Link></Text>
            <Text yMove={10}><Link href="/"><p>Perks</p></Link></Text>
            <Text yMove={10}><Link href="/"><p>Help</p></Link></Text>
        </div>
        <div className={styles.right}>
            <Text yMove={10}><Link href="/"><p>Log In</p></Link></Text>
            <Text yMove={10}><Link href="/"><p>Register</p></Link></Text>
            <div className={styles.icons}>
                <Text yMove={10}><Icon label='search-icon'></Icon></Text>
                <Text yMove={10}><Icon label='message-icon'></Icon></Text>
                <Text yMove={10}><Icon label='theme-icon'></Icon></Text>
            </div>
            <Avatar></Avatar>
        </div>
    </div>
  )
}

export default Header