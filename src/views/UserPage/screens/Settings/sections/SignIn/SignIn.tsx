import React, { useEffect } from 'react'
import styles from './SignIn.module.scss'
import Text from '@/components/Text/Text'
import CheckBox from '@/components/UI/CheckBox/CheckBox'

const SignIn = () => {

  return (
    <div className={styles.signIn}>
        <div className={styles.section}>
            <Text>
                <p>
                    Email Address
                </p>
            </Text>
            <Text>
                <p>
                    support@keenthemes.com
                </p>
            </Text>
            <button>Change Email</button>
        </div>
        <div className={styles.section}>
            <Text>
                <p>
                    Password
                </p>
            </Text>
            <Text>
                <p>
                    *************
                </p>
            </Text>
            <button>Reset Password</button>
        </div>
    </div>
  )
}

export default SignIn