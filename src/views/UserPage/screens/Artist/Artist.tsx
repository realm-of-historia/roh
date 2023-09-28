import React from 'react'
import styles from './Artist.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'

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
    <div className={styles.artist}>
        
    </div>
  )
}

export default Dashboard