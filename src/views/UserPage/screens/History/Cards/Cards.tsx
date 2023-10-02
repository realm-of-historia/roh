import React from 'react'
import styles from './Cards.module.scss'
import Card from './Card/Card'

export default function Cards() {

    return(
        <div className={styles.cards}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}