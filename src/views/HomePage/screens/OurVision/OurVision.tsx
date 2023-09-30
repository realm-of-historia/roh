import React from 'react'
import Column from './Column/Column'
import styles from './OurVision.module.scss'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'

const OurVision = ({secondText, list, text, leftSide}: {secondText: string | Array<string>,list: Array<string> | string, text: string | Array<string>, leftSide: string | Array<string>}) => {



    return (
        <div className={styles.vision}>
            <Divider position={"bottom left"} horizontal={true}></Divider>
            <Divider position={"top left"} horizontal={true}/>
            <Divider position={"top left"}/>
            <div className={styles.left}>
                <Text><p>{leftSide}</p></Text>
            </div>
            <div className={styles.right}>
                <Column secondText={secondText} text={text} list={list}></Column>
            </div>
        </div>
    )
}

export default OurVision