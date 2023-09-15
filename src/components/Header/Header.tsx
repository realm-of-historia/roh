import React from 'react'
import styles from './Header.module.scss'
import Icon from '../UI/Icon/Icon'
import Avatar from './Avatar/Avatar'


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
            <p>Home</p>
            <p>History Section</p>
            <p>Perks</p>
            <p>Help</p>
        </div>
        <div className={styles.right}>
            <p>Log In</p>
            <p>Register</p>
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