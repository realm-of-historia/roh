"use client"

import React, { useEffect, useState } from 'react'
import styles from './Deactivation.module.scss'
import Text from '@/components/Text/Text'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import { useForm, Controller } from 'react-hook-form'
import Divider from '@/components/Divider/Divider'
import { useAuthStore } from '@/store/store'
import { useUserFetch } from '@/composable/useApiFetch'
import authConfig from '@/authConfig/authConfig'

const Deactivation = ({ data }: any) => {

    const [isCheckedState, setIsCheckedState] = useState(false);
    const token = useAuthStore((state: any) => (state.token))

    const { register, handleSubmit, control } = useForm<any>({
    });

    const onSubmit: any = (data: any) => console.log(data)


    const deactivateHandler = () => {
        if (!token) { return }
        const FetchData = async (token: any) => {
            const dataUser = await useUserFetch('api/crypto-user/delete/', token, 'DELETE')
            return dataUser
        }
        const fetchDataAndLog = async () => {
            const result = await FetchData(token);

            console.log(result.status)

            if(result?.status === 'success') {
                useAuthStore.setState({token: null})
                authConfig.logout();
            }
        };
        fetchDataAndLog()
    }

    return (
        <form className={styles.deactivation} id='deactivation' onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.description}>
                <img src="/security.png" alt="" width={64} height={64} />
                <div className={styles.wrapperText}>
                    {
                        data?.textYouAreDeactivating &&
                        <p>{data?.textYouAreDeactivating}</p>
                    }
                    {
                        (data?.descriptionYouAreDeactivating || data?.learnMore) &&
                        <p>{data?.descriptionYouAreDeactivating} <span><a href={data?.learnMore.href || '/'}>{data?.learnMore.name}</a></span></p>

                    }
                </div>
                <Divider position={'left bottom'} noAnim={true} horizontal={true} opacityNo={true} />
            </div>
            <div className={styles.section}>
                <Controller
                    name='deactivationConfirmationCheckbox'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <CheckBox setIsCheckedState={setIsCheckedState} isCheckedState={isCheckedState} field={field}></CheckBox>}
                />
                <div>
                    {
                        data?.checkboxtext &&
                        <p>
                            {data?.checkboxtext}
                        </p>
                    }

                </div>
            </div>
            <div className={styles.footer}>
                <button type='submit' onClick={deactivateHandler}  className={`${styles.buttonWhite} ${isCheckedState ? '' : styles.buttonWhiteno}`}>{data?.buttonDeactivateAccount}</button>
            </div>
        </form>
    )
}

export default Deactivation