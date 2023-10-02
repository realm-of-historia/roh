import React from 'react'
import styles from './Statistic.module.scss'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'

const Statistic = ({title, text}: {title: string, text: string}) => {


  return (
    <div className={styles.stat}>
        <Text>
            <p>
                {title}
            </p>
        </Text>
        <Divider position={'top left'}></Divider>
        <Divider position={'top right'}></Divider>
        <Text>
            <p>
                {text}
            </p>
        </Text>
    </div>
  )
}

export default Statistic