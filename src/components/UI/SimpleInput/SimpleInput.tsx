import styles from './SimpleInput.module.scss';
import React from 'react';
import Icon from '../Icon/Icon';
import { useForm } from 'react-hook-form'

interface SimpleInputProps {
    placeholder: string;
    icon?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isContacts: boolean;
    name: string;
    register?: any,
}

const SimpleInput: React.FC<SimpleInputProps> = ({ placeholder, icon, onChange, value, isContacts, name, register }) => {

    const padding = isContacts ? styles.input : styles.contactsInput

    return (
        <div className={styles.simpleInput}>
            {/* <form className={styles.wrapperInput}> */}
            <div className={styles.wrapperInput}>
                <Icon label={icon}></Icon>
                <input
                    {...register(name, {
                        required: "fill in the field.",
                        pattern: {
                            value: value === 'phone' ? /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ : /^[a-zA-Z][a-zA-Z0-9-]+$/,
                            message: 'incorrect value'
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