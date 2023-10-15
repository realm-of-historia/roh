// import React from 'react'
import styles from './Panegliph.module.scss'
import { NextPage } from 'next'
import Icon from '../UI/Icon/Icon'

interface Panegliph {
    isFirst: boolean,
}

const Panegliph: NextPage<Panegliph> = ({isFirst}) => {

    const backgroundClass = isFirst ? styles['black'] : styles['yellow'];

    let path = null

    if (isFirst) {
        path = 'Black' 
    } else {
        path = ''
    }

  return (
    <div className={`${styles.panegliph} ${backgroundClass}`}>
        <div className={styles.container}>
            <picture><img alt=''  className={styles.letter} src={`${path}MainLetter.png`} width='166' height='246'/></picture>
            <div className={styles.circle_1}>
                <div></div>
            </div>
            <div className={styles.circle_2}>
                <div></div>
            </div>
            <div className={styles.circle_3}>
                <div></div>
            </div>
            <div className={styles.circle_4}>
                <div></div>
            </div>
            <div className={styles.circle_5}>
                <div></div>
            </div>
            <div className={styles.circle_6}>
                <div></div>
            </div>
            <div className={styles.circle_7}>
                <div></div>
            </div>
            <div className={styles.circle_8}>
                <div></div>
            </div>
            <div className={styles.circle_9}>
                <div></div>
            </div>                
            <div className={styles.ancient_1}>
                <Icon label='first'></Icon>
            </div>
            <div className={styles.ancient_2}>
                <Icon label='second'></Icon>
            </div>
            <div className={styles.ancient_3}>
                <Icon label='third'></Icon>
            </div>
            <div className={styles.ancient_4}>
                <Icon label='fourth'></Icon>
            </div>
            <div className={styles.ancient_5}>
                <Icon label='fifth'></Icon>
            </div>
            <div className={styles.ancient_6}>
                <Icon label='sixth'></Icon>
            </div>
            <div className={styles.ancient_7}>
                <Icon label='seventh'></Icon>
            </div>
            <div className={styles.ancient_8}>
                <Icon label='eighth'></Icon>
            </div>
            <div className={styles.topLine}></div>
        </div>
    </div>
  )
}

export default Panegliph