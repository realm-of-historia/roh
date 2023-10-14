import React from 'react'
import styles from './SwitchBox.module.scss'

export default function SwitchBox() {

    return(
        <label className={styles.switch}>
            <input type="checkbox"></input>
            <div className={`${styles.slider} ${styles.round}`}></div>
        </label>
    )
}