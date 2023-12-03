import React from 'react'
import styles from './SwitchBox.module.scss'

export default function SwitchBox({name, register} : any) {

    return(
        <label className={styles.switch}>
            <input type="checkbox" {...register(name)}></input>
            <div className={`${styles.slider} ${styles.round}`}></div>
        </label>
    )
}