import React from 'react'
import styles from './Statistic.module.scss'
import Text from '@/components/Text/Text'

const Statistic = ({title, text}: {title: string, text: string}) => {


  return (
    <div className={styles.stat}>
        <Text>
            <p>
                {title}
            </p>
        </Text>
        <div className={styles.dividerLeft}></div>
        <div className={styles.dividerRight}></div>
        <Text>
            <p>
                {text}
            </p>
        </Text>
    </div>
  )
}

export default Statistic