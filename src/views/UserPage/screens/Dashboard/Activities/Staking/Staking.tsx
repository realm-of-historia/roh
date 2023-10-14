import React from "react";
import styles from './Staking.module.scss'
import Select from 'react-select'
import { Controller, useForm } from "react-hook-form";
import SwitchBox from "@/components/UI/SwitchBox/SwitchBox";
import Icon from "@/components/UI/Icon/Icon";
import UserButtonBlack from "@/components/UI/buttons/UserButtonBlack/UserButtonBlack";

export default function Staking() {

    const {register, control, handleSubmit} = useForm()

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

      const options = [
        { value: 'All Staking', label: 'All Staking',},
        { value: 'Text', label: 'Text' },
        { value: 'Text2', label: 'Text2' },
      ];

      const choose = [
        ['NFT Mining', 'Running', false],
        ['ROHs Mining', 'Running', false],
        ['Est. daily USD', '$48.02', true],
        ['Pool Members', 'Bought Token', true],
      ]

    return (
        <form className={styles.staking}>
            <p className={styles.title}>staking</p>
            <div className={styles.dividerLeft}></div>
            <Controller 
                name='staking'
                control={control}
                render={({ field: {onChange, value, ref, name}}: any) => (
                    <Select value={options.find((c: any) => c.value === value)} {...register('staking')} onChange={(val: any) => onChange(val.value)}  className={styles.selectStyles} placeholder={'All Staking'} options={options} styles={selectStyles}/>
                )}
                rules={{required: true}}
            />
            <div className={styles.choose}>
                {choose.map((el: any, index: any) => (
                    <div key={index} className={styles.chooseContainer}>
                        <div className={styles.text}>
                            <p>
                                {el[0]}     
                            </p>
                            <p>
                                {el[1]}
                            </p>
                        </div>
                        {el[2] ? <div className={styles.spanContainer}><Icon label='horizontal-arrow'></Icon></div> : <SwitchBox></SwitchBox>}
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <UserButtonBlack text="Add NFT"></UserButtonBlack>
                <button className={styles.buttonWhite}>Buy ROH</button>
            </div>
        </form>
    )
}