import React, { useEffect } from 'react'
import styles from './Notifications.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'

const Notifications = () => {

  return (
    <div className={styles.notifications}>
        <div className={styles.section}>
            <Text>
                <p>
                    Notifications
                </p>
            </Text>
            <CheckBox></CheckBox>
            <Text>
                <p className={styles.text}>Email</p>
            </Text>
            <CheckBox></CheckBox>
            <Text>
                <p className={styles.text}>Phone</p>
            </Text>
        </div>
        <div className={styles.section}>
            <Text>
                <p>
                    Billing Updates
                </p>
            </Text>
            <CheckBox></CheckBox>
            <Text>
                <p className={styles.text}>Email</p>
            </Text>
            <CheckBox></CheckBox>
            <Text>
                <p className={styles.text}>Phone</p>
            </Text>
        </div>
        <div className={styles.section}>
            <Text>
                <p>
                    Mining
                </p>
            </Text>
            <CheckBox></CheckBox>
            <Text>
                <p className={styles.text}>Email</p>
            </Text>
            <CheckBox></CheckBox>
            <Text>
                <p className={styles.text}>Phone</p>
            </Text>
        </div>
        <div className={styles.footer}>
            <button>Discard</button>
            <UserButtonBlack text='Save Changes'></UserButtonBlack>
        </div>
    </div>
  )
}

export default Notifications