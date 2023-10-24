// "use client"

import React from 'react'
import styles from './Comments.module.scss'
import Comment from '@/components/Comment/Comment'
import News from './Comment/News'
import Link from 'next/link'
import Divider from '@/components/Divider/Divider'

const Comments = ({ data }: { data?: any }) => {

    return (
        <div className={styles.comments}>
            {
                data?.data.map((_: any, i: number) => (
                    <Link key={i + 8324} href={`/blog/${_.attributes.uid}` || '/'} className={styles.linkArticles}>
                        <News link={_.attributes.img.data.attributes.url}
                            isNews={true}
                            title={_.attributes.title}
                            avatar={_.attributes.avatar.data.attributes.url}
                            name={_.attributes.nameAndAchievements}
                            date={_.attributes.createdAt}/>
                            <Divider position={'left top'}/>
                            <Divider position={'right top'}/>
                    </Link>
                ))
            }
            <div className={styles.divider}></div>
        </div>
    )
}

export default Comments