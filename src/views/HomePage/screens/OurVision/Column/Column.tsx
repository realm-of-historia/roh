import React from 'react'
import styles from './Column.module.scss'
import Text from '@/components/Text/Text'

const Column = ({secondText, text, list}: {secondText: string | Array<string> | undefined, text: string | Array<string>, list: Array<string> | string}) => {

    return (
        <div className={styles.column}>
            <div className={styles.firstBlock}>
                <Text><p>About</p></Text>
                <Text><p>{text}</p></Text>
            </div>
            <div className={styles.secondBlock}>
                <Text><p className={styles.title}>Our vision</p></Text>
                <div className={styles.container}>
                    <Text><p>{secondText}</p></Text>
                    {Array.isArray(list) ? list.map((element: any) => (
                        <div className={styles.list} key={element}>
                            <Text><div className={styles.divider}></div></Text>
                            <Text><p>{element}</p></Text>
                        </div>
                    )) : <Text><p>{list}</p></Text>}
                </div>
            </div>
        </div>
    )
}

export default Column