import React from 'react'
import styles from './SwitchBox.module.scss'

export default function SwitchBox() {

    return(
        <label className={styles.switch}>
            <input type="checkbox"></input>
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}