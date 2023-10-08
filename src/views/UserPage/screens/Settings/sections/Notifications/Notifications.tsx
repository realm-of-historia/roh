import React, { useEffect } from 'react'
import styles from './Notifications.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'

const Notifications = () => {

  return (
    <div className={styles.notifications}>
        <div className={styles.section}>
            <div>
                <p>
                    Notifications
                </p>
            </div>
            <CheckBox></CheckBox>
            <div>
                <p className={styles.text}>Email</p>
            </div>
            <CheckBox></CheckBox>
            <div>
                <p className={styles.text}>Phone</p>
            </div>
        </div>
        <div className={styles.section}>
            <div>
                <p>
                    Billing Updates
                </p>
            </div>
            <CheckBox></CheckBox>
            <div>
                <p className={styles.text}>Email</p>
            </div>
            <CheckBox></CheckBox>
            <div>
                <p className={styles.text}>Phone</p>
            </div>
        </div>
        <div className={styles.section}>
            <div>
                <p>
                    Mining
                </p>
            </div>
            <CheckBox></CheckBox>
            <div>
                <p className={styles.text}>Email</p>
            </div>
            <CheckBox></CheckBox>
            <div>
                <p className={styles.text}>Phone</p>
            </div>
        </div>
        <div className={styles.footer}>
            <button className={styles.buttonWhite}>Discard</button>
            <UserButtonBlack text='Save Changes'></UserButtonBlack>
        </div>
    </div>
  )
}

export default Notifications