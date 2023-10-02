import React from 'react'
import styles from './UserNavigation.module.scss'
import Text from '@/components/Text/Text'
import NavButton from '../NavButton/NavButton'
import Link from 'next/link'

const UserNavigation = () => {


  return (
    <div className={styles.navigation}>
          <div className={styles.dividerTop}></div>
          <div className={styles.dividerBottom}></div>
          <Link href='/user' className={styles.link}><NavButton text='Personal'></NavButton></Link>
          <Link href='/dashboard' className={styles.link}><NavButton text='Dashboard'></NavButton></Link>
          <Link href='/history' className={styles.link}><NavButton text='History'></NavButton></Link>
          <Link href='/perks' className={styles.link}><NavButton text='Perks'></NavButton></Link>
          <Link href='/settings' className={styles.link}><NavButton text='Settings'></NavButton></Link>
    </div>
  )
}

export default UserNavigation