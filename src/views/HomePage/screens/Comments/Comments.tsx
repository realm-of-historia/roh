// "use client"

import React from 'react'
import styles from './Comments.module.scss'
import Comment from '@/components/Comment/Comment'
import News from './Comment/News'
import Link from 'next/link'

const Comments = ({ data }: { data?: any }) => {
    // console.log('datassd', data.data)
    const firstNew = [
        'Armenian stonehenge. Donation proccess.',
        'userImage3',
        'Cris morgan',
        'mar 14, 2021',
        'booksVideo'
    ]

    const secondNew = [
        'Armenian stonehenge. Donation proccess.',
        'userImage1',
        'Cris morgan',
        'mar 14, 2021',
        'stonehengeVideo'
    ]

    const thirdNew = [
        'Armenian stonehenge. Donation proccess.',
        'userImage2',
        'Cris morgan',
        'mar 14, 2021',
        'colliseumVideo'
    ]

    return (
        <div className={styles.comments}>
            {/* <Link href='/blog/5'><News link={firstNew[4]} isNews={true} title={firstNew[0]} avatar={firstNew[1]} name={firstNew[2]} date={firstNew[3]}></News></Link>
        <Link href='/blog/6'><News link={secondNew[4]} isNews={true} title={secondNew[0]} avatar={secondNew[1]} name={secondNew[2]} date={secondNew[3]}></News></Link>
        <Link href='/blog/7'><News link={thirdNew[4]} isNews={true} title={secondNew[0]} avatar={secondNew[1]} name={secondNew[2]} date={secondNew[3]}></News></Link> */}
            {
                data?.data.map((_: any, i: number) => (
                    <Link key={i + 8324} href={`/blog/${_.attributes.uid}`}>
                        <News link={_.attributes.img.data.attributes.url}
                            isNews={true}
                            title={_.attributes.title}
                            avatar={_.attributes.avatar.data.attributes.url}
                            name={_.attributes.nameAndAchievements}
                            date={_.attributes.createdAt}>
                        </News>
                    </Link>
                ))
            }
            <div className={styles.divider}></div>
        </div>
    )
}

export default Comments