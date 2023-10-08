import React, { useEffect } from 'react'
import styles from './Deactivation.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'

const Deactivation = () => {

  return (
    <div className={styles.deactivation}>
        <div className={styles.section}>
            <CheckBox></CheckBox>
            <div>
                <p>
                    I confirm my account deactivation
                </p>
            </div>
        </div>
        <div className={styles.footer}>
            <button className={styles.buttonWhite}>Deactivate account</button>
        </div>
    </div>
  )
}

export default Deactivation