import React, { useEffect, useMemo } from 'react'
import styles from './Details.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import {useState} from 'react'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import SwitchBox from '@/components/UI/SwitchBox/SwitchBox'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import {useForm, Controller} from 'react-hook-form'
import Select from 'react-select'
// import {countryList} from 'react-select-country-list'
import Dropdown from '@/components/UI/Dropdown/Dropdown'

const DetailsProfile = () => {

    const timeOptions = [
        { value: '11pm', label: '11pm',},
        { value: '12pm', label: '12pm' },
        { value: '13pm', label: '13pm' },
      ];

    const languageOptions = [
        { value: 'Russian', label: 'Russian',},
        { value: 'Armenian', label: 'Armenian' },
        { value: 'English', label: 'English' },
    ];

    const currencyOptions = [
        { value: 'EUR', label: 'EUR',},
        { value: 'USD', label: 'USD' },
        { value: 'RUB', label: 'RUB' },
    ];

    const countryOptions = [
        { value: 'RU', label: 'Russia',},
        { value: 'PL', label: 'Poland' },
        { value: 'USA', label: 'United States' },
    ]

    const [selectFocused, setSelectFocused] = useState(null);

    const handleSelectFocus = (name: any) => {
        setSelectFocused(name);
      };
    
      const handleSelectBlur = () => {
        setSelectFocused(null);
      };



      const selectStyles: any = {
        control: (styles: any) => ({ ...styles, backgroundColor: '#FBF6E8', border: 'none',
         color: '#583F21 !important', padding: '0px',
        
    }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected } : {data: any, isDisabled: boolean, isFocused: boolean, isSelected: boolean}) => {
          const color = data.color;
          return {
            ...styles,
            backgroundColor: '#FBF6E8',
            color: '#583F21 !important',
            cursor: isDisabled ? 'not-allowed' : 'default',
          };
        },
      };



    const [SecondName, setSecondName] = useState('')

    const {register, handleSubmit, control} = useForm<any>({
        defaultValues: {
            CheckBox: false
        }
    });

    const detailsText = [
        ['Full Name *', 'Vasya', 'firstName', false, 'Pupkin', 'secondName', setSecondName],
        ['Contact Phone *', '044 3276 454 935', 'phone', false],
        ['Company Site', 'vasya.pupkin@1507.io', 'companySite', false],
        ['Country *', 'Select country', 'country', true, countryOptions, 'country'],
        ['Language *', 'Select language', 'language', true, languageOptions, 'language'],
        ['Time Zone *', 'Select timezone...', 'time zone', true, timeOptions, 'timeZone'],
        ['Currency', 'Select a currency...', 'currency', true, currencyOptions, 'currency'],
        ['Communication', '', '', '', '', '', '', 'Email', 'Phone'],
    ]

    const onSubmit: any = (data: any) => console.log(data)



  return (
    <form id='detailsForm' className={styles.details} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.avatar}>
            <p>Avatar</p>
            <div className={styles.container}>
                <img src='/userImage.png' width={240} height={240} alt=''/>
                <input type='file'/>
                <span>Choose your file</span>
            </div>
        </div>
        {detailsText.map((element: any) => (
            <div key={element} className={styles.section}>
                <div>
                    <p>
                        {element[0]}
                    </p>
                </div>
                {!element[7] ? <div className={`${element[0] == 'Full Name *' ?  styles.inputs : styles.inputi}`}>
                    {element[3] ? 
                    <div className={styles.selectContainer}>
                        <Controller 
                            name={element[5]}
                            control={control}
                            render={({ field: {onChange, value, ref, name}}: any) => (
                                <Select onFocus={() => handleSelectFocus(element[5])} value={element[4].find((c: any) => c.value === value)} {...register(element[5])} onChange={(val: any) => onChange(val.value)}  className={styles.selectStyles} placeholder={element[1]} options={element[4]} styles={selectStyles}/>
                            )}
                            rules={{required: true}}
                        />
                        <div className={`${styles.selectDivider} ${selectFocused == element[5] ? styles.focused : ''}`}>
                            <div></div>
                            <div></div>
                        </div>
                        {/* <input className={styles.dividerDetector}/> */}
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
                        rules={{required: true}}
                        render={({field}) => <CheckBox field={field}></CheckBox>}
                    />
                    <p>{element[7]}</p>
                    <Controller
                        name='checkPhone'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => <CheckBox field={field}></CheckBox>}
                    />
                    <p>{element[8]}</p>
                </div>}
            </div>
        ))}
        <div className={styles.switches}>
            <p>Allow Marketing</p>
            <SwitchBox></SwitchBox>
        </div>
        <div className={styles.footer}>
            <button className={styles.buttonWhite}>Discard</button>
            <UserButtonBlack formId='detailsForm' text='Save Changes'></UserButtonBlack>
        </div>
    </form>
  )
}

export default DetailsProfile