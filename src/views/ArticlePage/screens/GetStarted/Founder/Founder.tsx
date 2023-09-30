import React from 'react'
import styles from './Founder.module.scss'
import Text from '@/components/Text/Text'


const Founder = ({avatar, name, rank, title} : {avatar: string | Array<string>, name: string | Array<string>, rank: string | Array<string>, title?: string | Array<string> | undefined}) => {


  return (
    <div className={styles.founder}>
        <img src={`/${avatar}.png`} alt='' width={80} height={80}/>
        <div>
            <Text><p className={styles.text}>{title}</p></Text>
            <Text><p>{name}, {rank}</p></Text>
        </div>
        <div className={styles.topDivider}></div>
    </div>
  )
}

export default Founder