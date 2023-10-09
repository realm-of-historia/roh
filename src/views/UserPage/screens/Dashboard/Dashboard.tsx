import React from 'react'
import styles from './Dashboard.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import Payment from './Payment/Payment'
import Graph from './Graph/Graph'

const Dashboard = () => {

    const detailsText = [
        ['Full Name', 'Vasya Pupkin'],
        ['Contact Phone', '044 3276 454 935', true],
        ['Email', 'vasya.pupkin@1507.io'],
        ['Country', 'Armenia'],
        ['Communication', 'Email, Phone'],
        ['Allow Changes', 'Yes']
    ]


  return (
    <div className={styles.netWorth}>
          <Payment></Payment>
          <Graph></Graph>
    </div>  
  )
}

export default Dashboard