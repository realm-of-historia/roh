import React, { useEffect, useState } from 'react'
import styles from './Preferences.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import {useForm, SubmitHandler} from 'react-hook-form'

interface IFormInputs {
    paymentsCheckbox: boolean,
    payoutsCheckbox: boolean,
    feeCheckbox: boolean,
  }

const Preferences = () => {

    // const { handleSubmit, control, reset } = useForm<IFormInputs>({
    //     defaultValues: {
    //         paymentsCheckbox: false,
    //         payoutsCheckbox: false,
    //         feeCheckbox: false,
    //     },
    //   })
    //   const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

    const [payment, setPayment] = useState(false)
    const [fee, setFee] = useState(false)
    const [payouts, setPayouts] = useState(false)

    const handleSubmit = () => {
        console.log(payment, fee, payouts)
    }
    
  return (
    <form id='preferences' className={styles.preferences} onSubmit={handleSubmit}>
        <div className={styles.section}>
            <CheckBox ></CheckBox>
            <div>
                <p>
                    Successful payments
                </p>
            </div>
        </div>
        <div className={styles.section}>
            <CheckBox></CheckBox>
            <div>
                <p>
                    Payouts
                </p>
            </div>
        </div>
        <div className={styles.section}>
            <CheckBox></CheckBox>
            <div>
                <p>
                    Fee Collection
                </p>
            </div>
        </div>
        <div className={styles.footer}>
            <button className={styles.buttonWhite}>Discard</button>
            <UserButtonBlack formId='preferences' text='Save Changes'></UserButtonBlack>
        </div>
    </form>
  )
}

export default Preferences