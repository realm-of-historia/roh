import React from 'react'
import styles from './UserCard.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import CheckBox from '@/components/UI/CheckBox/CheckBox'
import Dropdown from '@/components/UI/Dropdown/Dropdown'
import Select from 'react-select'
import {useForm, Controller} from 'react-hook-form'

export default function UserCard({isWeight, product, sku, qty, price, status, actions, label}: {isWeight?: boolean, product: string, sku: string, qty:string, price: string, status: string, actions: string, label?: string}) {

    const options = [
        { value: 'Done', label: 'Done',},
        { value: 'Waiting', label: 'Waiting' },
        { value: 'In complete', label: 'In complete' },
    ]

    const {control, handleSubmit} = useForm()

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

      const onSubmit = (data: any) => console.log(data)

    return(
        <form className={styles.userCard}>
            <div>
                <Controller
                    name='perkCheckbox'
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <CheckBox field={field}></CheckBox>}
                />
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                <img alt='' src='/Avatar.png' width={32} height={32}/>
                {product}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {sku}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {qty}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {price}
            </div>
            <div className={`${isWeight ? styles.weight : ''}`}>
                {status}
            </div>
            {!isWeight ? <div className={`${isWeight ? styles.weight : ''}`}>
                <Icon label='star-dark'></Icon>
                <Icon label='star-dark'></Icon>
                <Icon label='star-dark'></Icon>
                <Icon label='star-dark'></Icon>
                <Icon label='star'></Icon>
            </div> 
            :
            <div className={`${isWeight ? styles.weight : ''}`}>
                Rating
            </div> 
            }
            <div className={`${isWeight ? styles.weight : ''}`}>
                {isWeight ? actions : <Select onChange={(element) => console.log(element)} className={styles.selectStyles} placeholder={'Actions'} options={options} styles={selectStyles}/>}
            </div>
        </form>
    )
}