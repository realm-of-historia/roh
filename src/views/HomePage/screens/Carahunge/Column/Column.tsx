import React from 'react'
import styles from './Column.module.scss'
import { NextPage } from 'next'
import Icon from '@/components/UI/Icon/Icon'


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
            <p>Created By</p>
            <p>{creator}</p>
        </div>
        <div className={styles.description}>
            <p>Description</p>
            <div>
                {description.map((element: any) => (
                    <p key={element}>{element}</p>
                ))}
            </div>
        </div>
        <div className={styles.section}>
            <p>
                Details
            </p>
            <p>
                {<Icon label={icon}></Icon>} {details}
            </p>
        </div>
    </div>
  )
}

export default Column