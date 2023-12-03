"use client"

import React, { useEffect, useMemo } from 'react'
import styles from './Details.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import { useState } from 'react'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import SwitchBox from '@/components/UI/SwitchBox/SwitchBox'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
// import {countryList} from 'react-select-country-list'
import Dropdown from '@/components/UI/Dropdown/Dropdown'
import { useAuthStore } from '@/store/store'
import { useUserFetch } from '@/composable/useApiFetch'

const DetailsProfile = () => {
    const token = useAuthStore((state: any) => (state.token))
    const profileChange = useAuthStore((state: any) => (state.profileChange))

    const [data, setData]: any = useState()


    useEffect(() => {
        if (!token) { return }
        const FetchData = async (token: any) => {
            const dataUser = await useUserFetch('api/crypto-user/', token)
            return dataUser
        }
        const fetchDataAndLog = async () => {
            const result = await FetchData(token);
            setData(result)
        };
        fetchDataAndLog()
    }, [token, profileChange])




    const languageOptions = [
        { value: 'Russian', label: 'Russian', },
        { value: 'Armenian', label: 'Armenian' },
        { value: 'English', label: 'English' },
    ];

    const countryOptions = [
        { value: 'RU', label: 'Russia', },
        { value: 'PL', label: 'Poland' },
        { value: 'USA', label: 'United States' },
    ]


    const selectStyles: any = {
        control: (styles: any, { isFocused }: { isFocused: boolean }) => ({
            ...styles, backgroundColor: '#F5F2EB', border: 'none',
            color: '#383727 !important', padding: '0px', minHeight: '0 !important',

        }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected }: { data: any, isDisabled: boolean, isFocused: boolean, isSelected: boolean }) => {
            const color = data.color;
            return {
                ...styles,
                backgroundColor: '#FBF6E8',
                color: '#383727 !important',
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        },
    };



    const [SecondName, setSecondName] = useState('')

    const { register, handleSubmit, control } = useForm<any>({
        defaultValues: {
            CheckBox: false
        }
    });

    const detailsText = [
        ['Full Name *', 'Vasya', 'firstName', false, 'Pupkin', 'secondName', setSecondName],
        ['Contact Phone *', '054 544 325', 'phone', false],
        // ['Company Site', 'vasya.pupkin@1507.io', 'companySite', false],
        ['Country *', 'Select country', 'country', true, countryOptions, 'country'],
        ['Language *', 'Select language', 'language', true, languageOptions, 'language'],
        // ['Time Zone *', 'Select timezone...', 'time zone', true, timeOptions, 'timeZone'],
        // ['Currency', 'Select a currency...', 'currency', true, currencyOptions, 'currency'],
        // ['Communication', '', '', '', '', '', '', 'Email', 'Phone'],
    ]

    const onSubmit: any = (data: any) => {
        console.log(data)
        fetch('https://api.realmofhistoria.com/api/crypto-user/', {
            method: 'PUT',
            body: JSON.stringify({ 
                name: data.name,
                surname: data.firstName,
                country: data.country,
                language: data.language,
                phone: data.phone,
                allow_marketing: data.checBox
            }), 
            headers: { 'content-type': 'application/json', 'Authorization': `Bearer ${token}` } 
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .then(e => useAuthStore.setState({ profileChange: new Date().getTime() }))

    }




    return (
        <form id='detailsForm' className={styles.details} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.avatar}>
                <p>Avatar</p>
                <div className={styles.container}>
                    <img src='/userImage.png' width={240} height={240} alt='' />
                    <input type='file' />
                    <span>Choose your file</span>
                </div>
            </div>
            {/* {detailsText.map((element: any) => (
                <div key={element} className={styles.section}>
                    <div>
                        <p>
                            {element[0]}
                        </p>
                    </div>
                    {!element[7] ? <div className={`${element[0] == 'Full Name *' ? styles.inputs : styles.inputi}`}>
                        {element[3] ?
                            <div className={styles.selectContainer}>
                                <Controller
                                    name={element[5]}
                                    control={control}
                                    render={({ field: { onChange, value, ref, name } }: any) => (
                                        <Select
                                            value={element[4].find((c: any) => c.value === value)}
                                            {...register(element[5])}
                                            onChange={(val: any) => onChange(val.value)}
                                            className={`${styles.selectStyles} `}
                                            placeholder={element[1]}
                                            options={element[4]}
                                            styles={selectStyles} />
                                    )}
                                    rules={{ required: true }}
                                />

                            </div>
                            :
                            <SimpleInput name={element[2]} register={register} placeholder={element[1]} isContacts={false}></SimpleInput>}
                        {element[0] == 'Full Name *' ?
                            <SimpleInput name={element[5]} register={register} placeholder={element[4]} isContacts={false}></SimpleInput> :
                            <></>
                        }
                    </div> :
                        <div className={styles.checks}>
                            <Controller
                                name='checkEmail'
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <CheckBox field={field}></CheckBox>}
                            />
                            <p>{element[7]}</p>
                            <Controller
                                name='checkPhone'
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <CheckBox field={field}></CheckBox>}
                            />
                            <p>{element[8]}</p>
                        </div>}
                </div>
            ))} */}
            <div className={styles.section}>
                <div>
                    <p>
                        Full Name *
                    </p>
                </div>
                <div className={styles.inputs}>
                    <SimpleInput name={'name'} register={register} placeholder={'Vasya'} isContacts={false}></SimpleInput>
                    <SimpleInput name={'firstName'} register={register} placeholder={'Pupkin'} isContacts={false}></SimpleInput>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <p>
                        Contact Phone *
                    </p>
                </div>
                <div className={styles.inputi}>
                    <SimpleInput name={'phone'} register={register} placeholder={'054 544 325'} isContacts={false}></SimpleInput>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <p>
                        Country *
                    </p>
                </div>
                <div className={styles.inputi}>
                    <div className={styles.selectContainer}>
                        <Controller
                            name={'country'}
                            control={control}
                            render={({ field: { onChange, value, ref, name } }: any) => (
                                <Select
                                    value={countryOptions.find((c: any) => c.value === value)}
                                    {...register('country')}
                                    onChange={(val: any) => onChange(val.value)}
                                    className={`${styles.selectStyles} `}
                                    placeholder={'Select country'}
                                    options={countryOptions}
                                    styles={selectStyles} />
                            )}
                            rules={{ required: true }}
                        />

                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <p>
                        Language *
                    </p>
                </div>
                <div className={styles.inputi}>
                    <div className={styles.selectContainer}>
                        <Controller
                            name={'language'}
                            control={control}
                            render={({ field: { onChange, value, ref, name } }: any) => (
                                <Select
                                    value={languageOptions.find((c: any) => c.value === value)}
                                    {...register('language')}
                                    onChange={(val: any) => onChange(val.value)}
                                    className={`${styles.selectStyles} `}
                                    placeholder={'Select language'}
                                    options={languageOptions}
                                    styles={selectStyles} />
                            )}
                            rules={{ required: true }}
                        />

                    </div>
                </div>
            </div>

            <div className={styles.switches}>
                <p>Allow Marketing</p>
                <SwitchBox name={'checBox'} register={register}></SwitchBox>
            </div>
            <div className={styles.footer}>
                <button className={styles.buttonWhite}>Save Changes</button>
                {/* <UserButtonBlack formId='detailsForm' text='Save Changes'></UserButtonBlack> */}
            </div>
        </form>
    )
}

export default DetailsProfile