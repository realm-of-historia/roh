"use client"

// import React from 'react'
import styles from './Column.module.scss'
import { NextPage } from 'next'
import Icon from '@/components/UI/Icon/Icon'
import Text from '@/components/Text/Text'
import Link from 'next/link'
import ImageMy from '@/components/Image/ImageMy'
import Divider from '@/components/Divider/Divider'
import Markdown from 'react-markdown'


interface Column {
    description: any,
    icon?: string | undefined | Array<string>,
    link?: any,
    iconLink?: any,
    initiation?: boolean
}

const Column: NextPage<Column> = ({ link, description, icon, iconLink, initiation=false }) => {
    // console.log(description)
    console.log(iconLink)
    return (
        <div className={styles.main}>
            <Divider position={"top right"} horizontal={true} />
            {
                description?.map((_: any, index: number) => (
                    <div key={index} className={`${styles.description} ${initiation ? styles.descriptioninitiation : ''}`}>
                        <Text><p>{_.name}</p></Text>
                        <Text><Markdown>{_.description}</Markdown></Text>
                    </div>
                ))
            }
            {
                link &&
                <div className={styles.section}>
                    <Text>
                        <p>
                            {link?.title}
                        </p>
                    </Text>
                    <Text>
                        <Link href={link?.href || '/'} className={styles.details}>
                            {/* {<Icon label={icon}></Icon>} {link?.name} */}
                            {<span className={styles.wrapperIcon}><ImageMy src={iconLink?.data.attributes.url} width={20} height={20} alt='' /></span>} {link?.name}
                        </Link>
                    </Text>
                </div>
            }
        </div>
    )
}

export default Column