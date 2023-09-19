import styles from './SimpleInput.module.scss'
import React from 'react'
import { useState } from 'react'
import Icon from '../Icon/Icon';


const SimpleInput = ({placeholder, icon}: {placeholder: string, icon?: string}) => {

    const [text, setText] = useState('');

    return (
        <div className={styles.simpleInput}>
            <Icon label={icon}></Icon>
            <input
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className={styles.inputDivider}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
} 

export default SimpleInput