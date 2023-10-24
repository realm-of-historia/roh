// import React from 'react'
import styles from './Column.module.scss'
import { NextPage } from 'next'
import Icon from '@/components/UI/Icon/Icon'
import Text from '@/components/Text/Text'
import Link from 'next/link'


interface Column {
    description: any,
    icon?: string | undefined | Array<string>,
    link: any
  }

const Column: NextPage<Column> = ({link, description, icon}) => {
    console.log(description)
  return (
    <div className={styles.main}>
        {
            description.map((_ : any, index: number) => (
                <div key={index} className={styles.description}>
                    <Text><p>{_.name}</p></Text>
                    <Text><p>{_.description}</p></Text>
                </div>
            ))
        }
        <div className={styles.section}>
            <Text>
                <p>
                    {link.title}
                </p>
            </Text>
            <Text>
                <Link href={link?.href} className={styles.details}>
                    {<Icon label={icon}></Icon>} {link?.name}
                </Link>
            </Text>
        </div>
    </div>
  )
}

export default Column