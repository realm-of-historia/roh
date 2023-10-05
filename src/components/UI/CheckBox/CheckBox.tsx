import React from 'react'
import styles from './CheckBox.module.scss'
import Icon from '../Icon/Icon'


export default function CheckBox() {

    return(
        <label className={styles.checkbox}>
            <input type="checkbox"></input>
            <span className={styles.checkmark}>
                <Icon label='checkbox'></Icon>
            </span>
        </label>
    )
}