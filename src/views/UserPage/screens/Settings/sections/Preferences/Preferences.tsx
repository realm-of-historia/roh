import React, { useEffect } from 'react'
import styles from './Preferences.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'

const Preferences = () => {

  return (
    <div className={styles.preferences}>
        <div className={styles.section}>
            <CheckBox></CheckBox>
            <Text>
                <p>
                    Successful payments
                </p>
            </Text>
        </div>
        <div className={styles.section}>
            <CheckBox></CheckBox>
            <Text>
                <p>
                    Payouts
                </p>
            </Text>
        </div>
        <div className={styles.section}>
            <CheckBox></CheckBox>
            <Text>
                <p>
                    Fee Collection
                </p>
            </Text>
        </div>
        <div className={styles.footer}>
            <button>Discard</button>
            <UserButtonBlack text='Save Changes'></UserButtonBlack>
        </div>
    </div>
  )
}

export default Preferences