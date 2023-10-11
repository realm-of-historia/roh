import React, { useEffect } from 'react'
import styles from './Deactivation.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import {useForm, Controller} from 'react-hook-form'

const Deactivation = () => {


    
    const {register, handleSubmit, control} = useForm<any>({
    });

    const onSubmit: any = (data: any) => console.log(data)

  return (
    <form className={styles.deactivation} id='deactivation' onSubmit={handleSubmit(onSubmit)}>
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