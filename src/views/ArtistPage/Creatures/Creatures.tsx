import React from 'react'
import styles from './Creatures.module.scss'
import Bundle from '@/components/Bundle/Bundle'


const Creatures = ({text, price, image}: {text?: string | Array<string>, price?: string | Array<string>, image?: string | Array<string>}) => {

    const items = [
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/chestNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ]
    ]

  return (
    <div className={styles.creatures}>
        {items.map((element: any, index: number) => (
            <Bundle key={index} title={element[0]} price={element[1]} image={element[2]}></Bundle>
        ))}
        {}
    </div>
  )
}

export default Creatures