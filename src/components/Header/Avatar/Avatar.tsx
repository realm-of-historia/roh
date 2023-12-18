"use client"

import React, { useState, useEffect } from 'react'
import styles from './Avatar.module.scss'
import Link from 'next/link'
import authConfig from '@/authConfig/authConfig'
import ImageMy from '@/components/Image/ImageMy'
import { useWindowSize } from 'rooks';
import { useAuthStore } from '@/store/store'
import { useUserFetch } from '@/composable/useApiFetch'
import { useSession, signOut, getSession} from 'next-auth/react'

export interface StandardComponentProps {
  searchIcon?: any,
  support?: any,
  subject?: any,
  data?: any,
  logOut?: any,
}

const Avatar = ({ searchIcon, support, subject, data, logOut }: StandardComponentProps) => {

  const [fetchedSession, setFetchedSession] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const userSession: any = await getSession();
      setFetchedSession(userSession)
    };

    fetchData();
  }, []);

  const burger: any = useAuthStore((state: any) => (state.isBurger))
  useEffect(() => {
    let element: any = document.getElementById("body");
    if (burger) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
      document.documentElement.style.position = 'relative';
      // element.style.cssText = 'overflow: hidden; height: 100vh;'
    } else {
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.documentElement.style.position = '';
      // element.style.cssText = 'overflow: visible; height: auto;'
    }
  }, [burger])
  const unLogIn = () => {
    // if (authConfig.connected) {
    if(fetchedSession){
      // authConfig.logout();
      // console.log(authConfig.connected)
      signOut()
      // console.log(session)
    } else {
      console.log(fetchedSession)
      console.log('disconnected')
    }
  }
  const { innerWidth }: number | any = useWindowSize();


  // user
  const token = useAuthStore((state: any) => (state.token))
  const profileChange = useAuthStore((state: any) => (state.profileChange))

  const [dataUserNew, setDataUserNew]: any = useState()

  useEffect(() => {
    if (!token) { return }
    const FetchData = async (token: any) => {
      const dataUser = await useUserFetch('api/crypto-user/', token)
      return dataUser
    }
    const fetchDataAndLog = async () => {
      const result = await FetchData(token);
      setDataUserNew(result)
    };
    fetchDataAndLog()
  }, [token, profileChange])


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
          <img className={styles.avatariMG} src={dataUserNew?.user.avatar ? `https://api.realmofhistoria.com/${dataUserNew?.user.avatar}` : '/ooui_user-avatar.png'} alt='' width={38} height={38} />
        </picture>
        <div className={styles.dropdown}>
          <img src={"/texture.png"} className={styles.texture} width={1920} height={800} alt="" />
          <div className={styles.userInfo}>
            <img className={styles.avatariMG} src={dataUserNew?.user.avatar ? `https://api.realmofhistoria.com/${dataUserNew?.user.avatar}` : '/ooui_user-avatar.png'} width={38} height={38} />
            <div className={styles.container}>
              <p>
                {dataUserNew?.user.name || dataUserNew?.user.surname ? dataUserNew?.user.name + ' ' + dataUserNew?.user.surname : dataUserNew?.user.wallet.substr(0, 10)}
              </p>
              <p>
                {dataUserNew?.user.email || ''}
              </p>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.options}>
            {
              data?.map((_: any, i: number) => (
                <Link key={i + 8348} href={_.href}><p>{_.name}</p></Link>
              ))
            }
            <p onClick={unLogIn}>{logOut}</p>
          </div>
        </div>
      </div>
      {
        innerWidth <= 1080 ?
          <div onClick={() => useAuthStore.setState({ isBurger: !burger })} className={styles.wrapBurger}>
            <div className={styles.containerBurger} >
              <span className={`${styles.burger} ${burger ? styles.burgerActive : null}`} />
              <span className={`${styles.burger2} ${burger ? styles.burgerActive2 : null}`} />
              <span className={`${styles.burger3} ${burger ? styles.burgerActive3 : null}`} />
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}

export default Avatar
