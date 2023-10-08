import React from 'react'
import styles from './UserButtonBlack.module.scss'
import Text from '@/components/Text/Text'

export default function UserButtonBlack({text, isPayment, formId}: {text: string, isPayment?: boolean, formId?:string}) {

    return(
        <button form={formId} type='submit' className={`${styles.buttonBlack} ${isPayment ? styles.pay : ''}`}>
            <div>
                <p>{text}</p>
            </div>
        </button>
    )
}