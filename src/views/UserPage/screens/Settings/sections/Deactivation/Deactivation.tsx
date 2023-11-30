import React, { useEffect } from 'react'
import styles from './Deactivation.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import {useForm, Controller} from 'react-hook-form'
import Divider from '@/components/Divider/Divider'

const Deactivation = () => {


    
    const {register, handleSubmit, control} = useForm<any>({
    });

    const onSubmit: any = (data: any) => console.log(data)

  return (
    <form className={styles.deactivation} id='deactivation' onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.description}>
            <img src="/security.png" alt="" width={64} height={64} />
            <div className={styles.wrapperText}>
                <p>You Are Deactivating Your Account</p>
                <p>For extra security, this requires you to confirm your email or phone number when you reset yousignr password. <span><a href='/'>Learn more.</a></span></p>
            </div>
            <Divider position={'left bottom'} noAnim={true} horizontal={true} opacityNo={true}/>
        </div>
        <div className={styles.section}>
            <Controller
                name='deactivationConfirmationCheckbox'
                control={control}
                rules={{required: true}}
                render={({field}) => <CheckBox field={field}></CheckBox>}
            />
            <div>
                <p>
                    I confirm my account deactivation
                </p>
            </div>
        </div>
        <div className={styles.footer}>
            <button type='submit' className={styles.buttonWhite}>Deactivate account</button>
        </div>
    </form>
  )
}

export default Deactivation