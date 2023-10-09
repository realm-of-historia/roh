import React, { useEffect } from 'react'
import styles from './SignIn.module.scss'
import Text from '@/components/Text/Text'
import CheckBox from '@/components/UI/CheckBox/CheckBox'

const SignIn = () => {

  return (
    <div className={styles.signIn}>
        <div className={styles.section}>
            <div>
                <p>
                    Email Address
                </p>
            </div>
            <div>
                <p>
                    support@keenthemes.com
                </p>
            </div>
            <button className={styles.buttonWhite}>Change Email</button>
        </div>
        <div className={styles.section}>
            <div>
                <p>
                    Password
                </p>  
            </div>
            <div>
                <p>
                    *************
                </p>
            </div>
            <button className={styles.buttonWhite}>Reset Password</button>
        </div>
    </div>
  )
}

export default SignIn