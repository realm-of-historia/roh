import React, { useEffect } from 'react'
import styles from './Notifications.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import {useForm, Controller} from 'react-hook-form'

const Notifications = () => {

    const { handleSubmit, control, reset } = useForm<any>({
        defaultValues: {
            CheckBox: false
        }
    })

    const onSubmit: any = (data: any) => console.log(data)

  return (
    <form id='notifications' className={styles.notifications} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.section}>
            <div>
                <p>
                    Notifications
                </p>
            </div>
            <Controller
                name='notificationEmail'
                control={control}
                rules={{required: true}}
                render={({field}) => <CheckBox field={field}></CheckBox>}
            />
            <div>
                <p className={styles.text}>Email</p>
            </div>
            <Controller
                name='notificationPhone'
                control={control}
                rules={{required: true}}
                render={({field}) => <CheckBox field={field}></CheckBox>}
            />
            <div>
                <p className={styles.text}>Phone</p>
            </div>
        </div>
        <div className={styles.section}>
            <div>
                <p>
                    Billing Updates
                </p>
            </div>
            <Controller
                name='updatesEmail'
                control={control}
                rules={{required: true}}
                render={({field}) => <CheckBox field={field}></CheckBox>}
            />
            <div>
                <p className={styles.text}>Email</p>
            </div>
            <Controller
                name='updatesPhone'
                control={control}
                rules={{required: true}}
                render={({field}) => <CheckBox field={field}></CheckBox>}
            />
            <div>
                <p className={styles.text}>Phone</p>
            </div>
        </div>
        <div className={styles.section}>
            <div>
                <p>
                    Mining
                </p>
            </div>
            <Controller
                name='miningEmail'
                control={control}
                rules={{required: true}}
                render={({field}) => <CheckBox field={field}></CheckBox>}
            />
            <div>
                <p className={styles.text}>Email</p>
            </div>
            <Controller
                name='miningPhone'
                control={control}
                rules={{required: true}}
                render={({field}) => <CheckBox field={field}></CheckBox>}
            />
            <div>
                <p className={styles.text}>Phone</p>
            </div>
        </div>
        <div className={styles.footer}>
            <button className={styles.buttonWhite}>Discard</button>
            <UserButtonBlack formId='notifications' text='Save Changes'></UserButtonBlack>
        </div>
    </form>
  )
}

export default Notifications