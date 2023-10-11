import React from 'react'
import styles from './CheckBox.module.scss'
import Icon from '../Icon/Icon'


export default function CheckBox({onClick, field}: {onClick?: any, field: any}) {

    return(
        <label className={styles.checkbox} onClick={onClick} htmlFor={field.id}>
            <input type="checkbox" {...field} checked={field.value} onChange={field.onChange}></input>
            <span className={styles.checkmark}>
                <Icon label='checkbox'></Icon>
            </span>
        </label>
    )
}