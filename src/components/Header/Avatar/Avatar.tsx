import React, { useState, useEffect } from 'react'
import styles from './Avatar.module.scss'
import Link from 'next/link'
import authConfig from '@/authConfig/authConfig'

const Avatar = () => {

  const unLogIn = () => {
    if(authConfig.connected){
        authConfig.logout();
        console.log(authConfig.connected)
    } else{
        console.log('disconnected')
    }
  }

  return (
    <div
      className={styles.avatar}
    >
      <picture>
        <img src='/Avatar.png' alt='' width={38} height={38}/>
      </picture>
        <div className={styles.dropdown}>
            <div className={styles.userInfo}>
            {/* <div className={styles.leftDivider}></div> */}
            {/* <div className={styles.bottomDivider}></div> */}
              <img src='/Avatar.png' width={38} height={38}/>
              <div className={styles.container}>
                <p>
                  Robert Fox
                </p>
                <p>
                  robert@kt.com
                </p>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.options}>
              <Link href='/user/personal'><p>My Profile</p></Link>
              <Link href='/lobby'><p>3d Lobby</p></Link>
              <Link href='/marketplace'><p>Marketplace</p></Link>
              <Link href='/artists'><p>Artists</p></Link>
              <p onClick={unLogIn}>Log Out</p>
            </div>
        </div>
    </div>
  )
}

export default Avatar
