// import React from 'react'
import styles from './Column.module.scss'
import { NextPage } from 'next'
import Icon from '@/components/UI/Icon/Icon'
import Text from '@/components/Text/Text'


interface Column {
    creator: string | Array<string>,
    description: any,
    details: string | Array<string>,
    icon?: string | undefined | Array<string>,
  }

const Column: NextPage<Column> = ({creator, description, details, icon}) => {

    console.log(icon)

  return (
    <div className={styles.main}>
        <div className={styles.section}>
            <Text><p>Created By</p></Text>
            <Text><p>{creator}</p></Text>
        </div>
        <div className={styles.description}>
            <Text><p>Description</p></Text>
            <div>
                {description.map((element: any) => (
                    <Text key={element}><p>{element}</p></Text>
                ))}
            </div>
        </div>
        <div className={styles.section}>
            <Text>
                <p>
                    Details
                </p>
            </Text>
            <Text>
                <p className={styles.details}>
                    {<Icon label={icon}></Icon>} {details}
                </p>
            </Text>
        </div>
    </div>
  )
}

export default Column