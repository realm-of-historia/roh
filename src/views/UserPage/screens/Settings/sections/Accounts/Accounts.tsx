import React, { useEffect } from 'react'
import styles from './Accounts.module.scss'
import Text from '@/components/Text/Text'
import SwitchBox from '@/components/UI/SwitchBox/SwitchBox'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'

const Accounts = () => {

  return (
    <div className={styles.accounts}>
        <Text>
            <p className={styles.important}>
                Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing code. <span>Learn More.</span>
            </p>
        </Text>
        <div className={styles.section}>
            <Text>
                <p>
                    Google
                </p>
            </Text>
            <SwitchBox></SwitchBox>
        </div>
        <div className={styles.section}>
            <Text>
                <p>
                    Metamask
                </p>
            </Text>
            <SwitchBox></SwitchBox>
        </div>
        <div className={styles.footer}>
            <button>Discard</button>
            <UserButtonBlack text='Save Changes'></UserButtonBlack>
        </div>
    </div>
  )
}

export default Accounts