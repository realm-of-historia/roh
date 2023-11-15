import React from 'react'
import styles from './RealmOfHistory.module.scss'
import Image from 'next/image'
import Text from '@/components/Text/Text'
import logoIcon from '../../../../public/LinkedPathGroupLogo.png'
import logoLetter from '../../../../public/LinkedPathGroup.png'


const RealmOfHistory = ({ data }: any) => {


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>
          <Text><p className={styles.first}>{data?.subtitle}</p></Text>
          <div className={styles.divider}></div>
          <Text><p className={styles.second}>{data?.header}</p></Text>
        </div>
        <Image alt='' className={styles.logo} src={logoIcon} />
        <Image alt='' className={styles.logoLetter} src={logoLetter} />
      </div>
    </div>
  )
}

export default RealmOfHistory