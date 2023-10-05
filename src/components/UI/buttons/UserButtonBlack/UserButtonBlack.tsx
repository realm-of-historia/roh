import React from 'react'
import styles from './UserButtonBlack.module.scss'
import Text from '@/components/Text/Text'

export default function UserButtonBlack({text, isPayment}: {text: string, isPayment?: boolean}) {

    return(
        <div className={`${styles.buttonBlack} ${isPayment ? styles.pay : ''}`}>
            <Text>
                <p>{text}</p>
            </Text>
        </div>
    )
}