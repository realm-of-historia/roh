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
            <Text>
                <p>
                    I confirm my account deactivation
                </p>
            </Text>
        </div>
        <div className={styles.footer}>
            <button>Deactivate account</button>
        </div>
    </div>
  )
}

export default Deactivation