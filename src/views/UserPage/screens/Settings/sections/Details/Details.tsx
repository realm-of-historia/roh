"use client"

import React, { useCallback, useEffect, useMemo } from 'react'
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
import { useDropzone } from 'react-dropzone'

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
        { value: 'RU', label: 'Russian', },
        { value: 'AM', label: 'Armenian' },
        { value: 'USA', label: 'English' },
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
    const [nameUs, setNameUs] = useState('')



    const { register, handleSubmit, control, setValue } = useForm<any>({
        shouldUseNativeValidation: true,
        defaultValues: {
            CheckBox: false,
        }
    });
    useEffect(() => {
        if (!data) { return }
        setValue('name', data?.user.name)
        setValue('firstName', data?.user.surname)
        setValue('phone', data?.user.phone)
        setValue('country', data?.user.country)
        setValue('language', data?.user.language)
        setValue('email', data?.user.email)
    }, [data])

    const [files, setFiles] = useState([]);
    const [filesserv, setFilesserv]: any = useState();

    const onSubmit: any = (_: any) => {
        fetch('https://api.realmofhistoria.com/api/crypto-user/', {
            method: 'PUT',
            body: JSON.stringify({
                name: _.name,
                surname: _.firstName,
                country: _.country,
                language: _.language,
                phone: _.phone,
                allow_marketing: _.checBox,
                email: _.email,
                avatar: filesserv
            }),
            headers: { 'content-type': 'application/json', 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .then(e => useAuthStore.setState({ profileChange: new Date().getTime() }))

    }


    // const formData = new FormData();
    // const onDrop = useCallback((acceptedFiles: any) => {
    //     acceptedFiles.forEach((file : any) => {
    //         const reader = new FileReader()
    //         reader.onabort = () => console.log('file reading was aborted')
    //         reader.onerror = () => console.log('file reading has failed')
    //         reader.onload = () => {
    //             // Do whatever you want with the file contents
    //             const binaryStr : any = reader.result

    //             formData.append('image', new Blob([binaryStr]));
    //         }
    //         reader.readAsArrayBuffer(file)
    //     })
    //     console.log(acceptedFiles)
    //     ;
    // }, [])
    const onDrop = useCallback((acceptedFiles: any) => {
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        let file = acceptedFiles[0]
        if (file) {
            const reader = new FileReader();
  
            reader.onload = function (e : any) {
              const base64String = e.target.result.split(',')[1];
              const imageSrc = `data:${file.type};base64,${base64String}`; 
              setFilesserv(imageSrc)
            };
  
            reader.readAsDataURL(file);
          } 

        
    }, []);
    
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': []
        }
    });
    const thumbs = files.map((file: any) => (
        <div key={file.name}>
            <img

                src={file.preview}
                alt={''}
                width={240}
                height={240}
            />
        </div>
    ));
    useEffect(() => () => {
        files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, [files]);
    // const {getRootProps, getInputProps} = useDropzone({onDrop})
    return (
        <form id='detailsForm' className={styles.details} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.avatar}>
                <p>Avatar</p>
                <div className={styles.container}  {...getRootProps()}>
                    {/* <img src='/userImage.png' width={240} height={240} alt='' /> */}
                    {
                        files.length !== 0 ?
                            thumbs
                            :
                            <img src='/ooui_user-avatar.png' width={240} height={240} alt='' />
                    }
                    <input id="fileInput" {...getInputProps()} type='file' />
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
                    <SimpleInput value={'text'} name={'name'} register={register} placeholder={'Vasya'} isContacts={false}></SimpleInput>
                    <SimpleInput value={'text'} name={'firstName'} register={register} placeholder={'Pupkin'} isContacts={false}></SimpleInput>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <p>
                        Contact Phone *
                    </p>
                </div>
                <div className={styles.inputi}>
                    <SimpleInput value={'phone'} name={'phone'} register={register} placeholder={'054 544 325'} isContacts={false}></SimpleInput>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <p>
                        Email *
                    </p>
                </div>
                <div className={styles.inputi}>
                    <SimpleInput value={'email'} name={'email'} register={register} placeholder={'www@ww.com'} isContacts={false}></SimpleInput>
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
                                    {...register('country', {
                                        required: "fill in the field.",
                                    })}
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