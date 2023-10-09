import React, { useEffect } from 'react'
import styles from './UserNavigation.module.scss'
import Text from '@/components/Text/Text'
import NavButton from '../NavButton/NavButton'
import { useAuthStore } from '@/store/store'

const UserNavigation = () => {

  const route = useAuthStore((state) => (state.userRoute))

  const routeHandler = (currentRoute: any) => {
    useAuthStore.setState({userRoute: currentRoute})
  }
  
  return (
    <div className={styles.navigation}>
          <div className={styles.dividerTop}></div>
          <div className={styles.dividerBottom}></div>
          <div onClick={() => routeHandler('personal')} className={`${styles.link} ${route == 'personal' ? styles.active : ''}`}><NavButton text='Personal'></NavButton></div>
          <div onClick={() => routeHandler('dashboard')} className={`${styles.link} ${route == 'dashboard' ? styles.active : ''}`}><NavButton text='Dashboard'></NavButton></div>
          <div onClick={() => routeHandler('history')} className={`${styles.link} ${route == 'history' ? styles.active : ''}`}><NavButton text='History'></NavButton></div>
          <div onClick={() => routeHandler('perks')} className={`${styles.link} ${route == 'perks' ? styles.active : ''}`}><NavButton text='Perks'></NavButton></div>
          <div onClick={() => routeHandler('settings')} className={`${styles.link} ${route == 'settings' ? styles.active : ''}`}><NavButton text='Settings'></NavButton></div>
    </div>
  )
}

export default UserNavigation