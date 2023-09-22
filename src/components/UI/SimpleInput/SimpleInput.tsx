import styles from './SimpleInput.module.scss';
import React from 'react';
import Icon from '../Icon/Icon';

interface SimpleInputProps {
    placeholder: string;
    icon?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isContacts: boolean;
}

const SimpleInput: React.FC<SimpleInputProps> = ({ placeholder, icon, value, onChange, isContacts}) => {

    const padding = isContacts ? styles.input : styles.contactsInput

    return (
        <div className={styles.simpleInput}>
            <Icon label={icon}></Icon>
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={padding}
            />
            <div className={styles.inputDivider}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default SimpleInput;