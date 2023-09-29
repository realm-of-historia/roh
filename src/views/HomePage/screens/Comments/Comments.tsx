import React from 'react'
import styles from './Comments.module.scss'
import Comment from '@/components/Comment/Comment'
import News from './Comment/News'
import Link from 'next/link'

const Comments = () => {

    const firstNew = [
        'Armenian stonehenge. Donation proccess.',
        'userImage3',
        'Cris morgan',
        'mar 14, 2021',
        'Video.png'
    ]

    const secondNew = [
        'Armenian stonehenge. Donation proccess.',
        'userImage1',
        'Cris morgan',
        'mar 14, 2021',
        'Video-2.png'
    ]

    const thirdNew = [
        'Armenian stonehenge. Donation proccess.',
        'userImage2',
        'Cris morgan',
        'mar 14, 2021',
        'Video-1.png'
    ]

  return (
    <div className={styles.comments}>
        <Link href='/blog/5'><News link={firstNew[4]} isNews={true} title={firstNew[0]} avatar={firstNew[1]} name={firstNew[2]} date={firstNew[3]}></News></Link>
        <Link href='/blog/6'><News link={secondNew[4]} isNews={true} title={secondNew[0]} avatar={secondNew[1]} name={secondNew[2]} date={secondNew[3]}></News></Link>
        <Link href='/blog/7'><News link={thirdNew[4]} isNews={true} title={secondNew[0]} avatar={secondNew[1]} name={secondNew[2]} date={secondNew[3]}></News></Link>
        <div className={styles.divider}></div>
    </div>
  )
}

export default Comments