import React, { useEffect } from 'react'
import styles from './UserNavigation.module.scss'
import Text from '@/components/Text/Text'
import NavButton from '../NavButton/NavButton'
import { useAuthStore } from '@/store/store'
import Link from 'next/link'

const UserNavigation = () => {

  const route = useAuthStore((state: any) => (state.userRoute))

  const routeHandler = (currentRoute: any) => {
    setTimeout(() => {
      useAuthStore.setState({userRoute: currentRoute})
    }, 100)
  }
  
  return (
    <div className={styles.navigation}>
          <div className={styles.dividerTop}></div>
          <div className={styles.dividerBottom}></div>
          {/* <Link href='/user/personal' onClick={() => routeHandler('personal')} className={`${styles.link} ${route == 'personal' ? styles.active : ''}`}><NavButton text='Personal'></NavButton></Link> */}
          <Link href='/user/my-realm' onClick={() => routeHandler('my-realm')} className={`${styles.link} ${route == 'my-realm' ? styles.active : ''}`}><NavButton text='My Realm'></NavButton></Link>
          <Link href='/user/the-vault-carahunge' onClick={() => routeHandler('the-vault-carahunge')} className={`${styles.link} ${route == 'the-vault-carahunge' ? styles.active : ''}`}><NavButton text='The Vault'></NavButton></Link>
          <Link href='/user/perks' onClick={() => routeHandler('perks')} className={`${styles.link} ${route == 'perks' ? styles.active : ''}`}><NavButton text='Perks'></NavButton></Link>
          {/* <Link href='/user/dashboard' onClick={() => routeHandler('dashboard')} className={`${styles.link} ${route == 'dashboard' ? styles.active : ''}`}><NavButton text='Dashboard'></NavButton></Link> */}
          {/* <Link href='/user/history' onClick={() => routeHandler('history')} className={`${styles.link} ${route == 'history' ? styles.active : ''}`}><NavButton text='History'></NavButton></Link> */}
          {/* <Link href='/user/perks' onClick={() => routeHandler('perks')} className={`${styles.link} ${route == 'perks' ? styles.active : ''}`}><NavButton text='Perks'></NavButton></Link> */}
         <Link href='/user/settings' onClick={() => routeHandler('settings')} className={`${styles.link} ${route == 'settings' ? styles.active : ''}`}><NavButton text='Settings'></NavButton></Link>
    </div>
  )
}

export default UserNavigation