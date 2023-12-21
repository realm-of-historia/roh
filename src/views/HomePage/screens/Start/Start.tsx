"use client"

import React, { useMemo, useState } from 'react'
import styles from './Start.module.scss'
import Comment from '../../../../components/Comment/Comment'
import Divider from '@/components/Divider/Divider'
import Link from 'next/link'
import ImageMy from '@/components/Image/ImageMy'

export interface StandardComponentProps {
    data?: string,
    articles?: any,
    poster? : string
}
const Start = ({ data, articles, poster }: StandardComponentProps) => {
    const [articlesMyR, setArticlesMyR] = useState([])
    const [articlesMyL, setArticlesMyL] = useState([])
    console.log(poster)
    useMemo(() => {
        if (!articles) { return }
        let lengthFirst = Math.floor(articles.data.length / 2) + 1;
        let firstSubarray = articles.data.slice(0, lengthFirst);
        let secondSubarray = articles.data.slice(lengthFirst);
        setArticlesMyR(firstSubarray)
        setArticlesMyL(secondSubarray)
    }, [articles])

    return (
        <div className={styles.start}>
            <Divider position={"top"}></Divider>
            <Divider position={"bottom"} horizontal={true}></Divider>
            <div className={styles.left}>
                <div className={styles.player}>
                    {
                        data && 
                        <ImageMy src={data} width={960} height={540} alt={''} poster={poster}/>
                    }
                </div>

                <span className={styles.loader}></span>
                <div className={styles.commentsSection}>
                    {articlesMyL.length > 0 &&
                        articlesMyL.map((_: any, i: number) => (
                            <Link key={i + 77} href={`/blog/${_.attributes.uid}` || '/'}><Comment isDivider={true}
                                isNews={false}
                                title={_.attributes.title}
                                comment={_.attributes.additionalComment}
                                avatar={_.attributes.avatar.data.attributes.url}
                                name={_.attributes.nameAndAchievements}
                                date={_.attributes.updatedAt} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.commentsSection}>
                    {articlesMyR.length > 0 &&
                        articlesMyR.map((_: any, i: number) => (
                            <Link key={i + 77} href={`/blog/${_.attributes.uid}` || '/'}><Comment isDivider={true}
                                isNews={false}
                                title={_.attributes.title}
                                comment={_.attributes.additionalComment}
                                avatar={_.attributes.avatar.data.attributes.url}
                                name={_.attributes.nameAndAchievements}
                                date={_.attributes.updatedAt} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Start