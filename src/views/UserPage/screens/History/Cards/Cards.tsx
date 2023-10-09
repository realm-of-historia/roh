import React from 'react'
import styles from './Cards.module.scss'
import Card from './Card/Card'

export default function Cards() {

    const firstCard = [
        'CARAHUNGe', '7 items'
    ]

    const secondCard = [
        'PYRAMIDS', '3 items'
    ]

    const thirdCard = [
        'STONeHeNGe', '1 item'
    ]

    return(
        <div className={styles.cards}>
            <div></div>
            <Card title={firstCard[0]} text={firstCard[1]}></Card>
            <Card title={secondCard[0]} text={secondCard[1]}></Card>
            <Card title={thirdCard[0]} text={thirdCard[1]}></Card>
        </div>
    )
}