import React from 'react'
import styles from './Column.module.scss'
import Text from '@/components/Text/Text'
export interface StandardComponentProps {
    data?: any,
}
const Column = ({ data }: StandardComponentProps) => {
    return (
        <div className={styles.column}>
            {
                data?.map((_: any, i: number) => {
                    return(
                    <div key={i + 44} className={styles.secondBlock}>
                        <Text><p className={styles.title}>{_.description.name}</p></Text>
                        <div className={styles.container}>
                            <Text><p>{_.description.description}</p></Text>
                            {_.list?.map((element: any) => (
                                <div className={styles.list} key={element.id + 12}>
                                    <Text><div className={styles.divider}></div></Text>
                                    <Text><p>{element.text}</p></Text>
                                </div>
                            )) }
                        </div>
                    </div>
                )})
            }
        </div>
    )
}

export default Column