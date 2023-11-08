"use client"

import React, { useState, useEffect } from 'react'
import styles from './Avatar.module.scss'
import Link from 'next/link'
import authConfig from '@/authConfig/authConfig'
import ImageMy from '@/components/Image/ImageMy'
import { useWindowSize } from 'rooks';
import { useAuthStore } from '@/store/store'

export interface StandardComponentProps {
  searchIcon?: any,
  support?: any,
  subject?: any,
}

const Avatar = ({ searchIcon, support, subject }: StandardComponentProps) => {
  const burger: any = useAuthStore((state: any) => (state.isBurger))

  const unLogIn = () => {
    if (authConfig.connected) {
      authConfig.logout();
      console.log(authConfig.connected)
    } else {
      console.log('disconnected')
    }
  }
  const { innerWidth }: number | any = useWindowSize();

  return (
    <div
      className={styles.avatar}
    >
      <div className={styles.wrapperIcon}>
        <ImageMy src={searchIcon} width={20} height={20} alt='' />
      </div>
      <div className={styles.wrapperIcon}>
        <ImageMy src={support} width={20} height={20} alt='' />
      </div>
      <div className={styles.wrapperIcon}>
        <ImageMy src={subject} width={20} height={20} alt='' />
      </div>
      <div className={styles.wraperAvatar}>
        <picture>
          <img src='/Avatar.png' alt='' width={38} height={38} />
        </picture>
        <div className={styles.dropdown}>
          <div className={styles.userInfo}>
            {/* <div className={styles.leftDivider}></div> */}
            {/* <div className={styles.bottomDivider}></div> */}
            <img src='/Avatar.png' width={38} height={38} />
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
      {
          innerWidth <= 576 ?
            <div className={styles.containerBurger} onClick={() => useAuthStore.setState({isBurger: !burger})}>
              <span className={`${styles.burger} ${burger ? styles.burgerActive : null}`} />
              <span className={`${styles.burger2} ${burger ? styles.burgerActive2 : null}`} />
              <span className={`${styles.burger3} ${burger ? styles.burgerActive3 : null}`} />
            </div>
            :
            <></>
        }
    </div>
  )
}

export default Avatar
