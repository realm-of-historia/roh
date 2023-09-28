import React from 'react'
import styles from './UserNavigation.module.scss'
import Text from '@/components/Text/Text'
import NavButton from '../NavButton/NavButton'

const UserNavigation = () => {


  return (
    <div className={styles.navigation}>
          <div className={styles.dividerTop}></div>
          <div className={styles.dividerBottom}></div>
          <NavButton text='Personal'></NavButton>
          <NavButton text='Dashboard'></NavButton>
          <NavButton text='History'></NavButton>
          <NavButton text='Perks'></NavButton>
          <NavButton text='Settings'></NavButton>
    </div>
  )
}

export default UserNavigation