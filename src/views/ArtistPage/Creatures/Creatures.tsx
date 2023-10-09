import React from 'react'
import styles from './Creatures.module.scss'
import Bundle from '@/components/Bundle/Bundle'
import Item from './Item/Item'

const Creatures = ({text, price, image, items}: {text?: string | Array<string>, price?: string | Array<string>, image?: string | Array<string>, items?: string | Array<string>}) => {


  return (
    <div className={styles.creatures}>
        {Array.isArray(items) ? items.map((element: any, index: number) => (
            <Item isArtist={true} key={index} title={element[0]} price={element[1]} image={element[2]}></Item>
        )) : <></>}
        {}
    </div>
  )
}

export default Creatures