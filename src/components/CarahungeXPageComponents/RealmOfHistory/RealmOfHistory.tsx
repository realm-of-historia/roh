import React from 'react'
import styles from './RealmOfHistory.module.scss'
import Image from 'next/image'
import Text from '@/components/Text/Text'
import logoIcon from '../../../../public/LinkedPathGroupLogo.svg'
import logoLetter from '../../../../public/LinkedPathGroupD.svg'


const RealmOfHistory = ({ data }: any) => {


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>
          <Text><p className={styles.first}>{data?.subtitle}</p></Text>
          <div className={styles.divider}></div>
          <Text><p className={styles.second}>{data?.header}</p></Text>
        </div>
        <div className={styles.wrapperImg}>
        <Image alt='' className={styles.logo} src={logoIcon} />
        <Image alt='' className={styles.logoLetter} src={logoLetter} />
        </div>
      </div>
    </div>
  )
}

export default RealmOfHistory