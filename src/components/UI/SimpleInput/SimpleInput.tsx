"use client"

import styles from './SimpleInput.module.scss';
import React, { useEffect } from 'react';
import Icon from '../Icon/Icon';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

interface SimpleInputProps {
    placeholder: string;
    icon?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isContacts: boolean;
    name: string;
    register?: any,
    errors?: any
}

const SimpleInput: React.FC<SimpleInputProps> = ({ errors, placeholder, icon, onChange, value, isContacts, name, register }) => {

    const padding = isContacts ? styles.input : styles.contactsInput
   
    return (
        <div className={styles.simpleInput}>
            {/* <form className={styles.wrapperInput}> */}
            <div className={styles.wrapperInput}>
                <Icon label={icon}></Icon>
                <input
                    {...register(name, {
                        required: true,
                        pattern: {
                            value: value === 'wallet' ? '' : value === 'text' ? /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9-]+$/ : /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                            // message: 'incorrect value'
                        }
                    })}
                    placeholder={placeholder}
                    className={padding}
                />
                
            </div>
            {/* </form> */}
            {/* <div className={styles.inputDivider}>
                <div></div>
                <div></div>
            </div> */}
        </div>
    )
}

export default SimpleInput;