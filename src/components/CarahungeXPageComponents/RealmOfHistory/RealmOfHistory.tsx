import React from 'react'
import styles from './RealmOfHistory.module.scss'
import Image from 'next/image'
import Text from '@/components/Text/Text'
import logoIcon from '../../../../public/logoRealm.svg'
import logoLetter from '../../../../public/logoRealmText.svg'


const RealmOfHistory = ({data} : any) => {


  return (
    <div className={styles.main}>
        <div className={styles.text}>
            <Text><p className={styles.first}>{data?.subtitle}</p></Text>
            <div className={styles.divider}></div>
            <Text><p className={styles.second}>{data?.header}</p></Text>
        </div>
        <Image alt='' className={styles.logo} src={logoIcon}/>
        <Image alt='' className={styles.logoLetter} src={logoLetter}/>
    </div>
  )
}

export default RealmOfHistory