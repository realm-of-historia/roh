// import React from 'react'
import styles from './Column.module.scss'
import { NextPage } from 'next'
import Icon from '@/components/UI/Icon/Icon'
import Text from '@/components/Text/Text'
import Link from 'next/link'
import ImageMy from '@/components/Image/ImageMy'


interface Column {
    creator: string | Array<string>,
    description: any,
    details: string | Array<string>,
    icon?: string | undefined | Array<string>,
    link: any
  }

const Column: NextPage<Column> = ({link, creator, description, details, icon}) => {

    console.log(link)

  return (
    <div className={styles.main}>
        {/* <div className={styles.section}>
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
        </div> */}
        {
            description.map((_ : any) => (
                <div className={styles.description}>
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
                {/* <p className={styles.details}> */}
                    {/* {<Icon label={icon}></Icon>} {details} */}
                {/* </p> */}
                <Link href={link.href} className={styles.details}>
                    {<Icon label={icon}></Icon>} {link.name}
                </Link>
            </Text>
        </div>
    </div>
  )
}

export default Column