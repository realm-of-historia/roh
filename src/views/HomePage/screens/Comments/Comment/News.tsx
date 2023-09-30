import React from 'react'
import styles from './News.module.scss'
import Comment from '@/components/Comment/Comment'

const News = ({isNews, link, title, avatar, name, date} : {isNews: boolean ,link: string ,title: string | Array<string>, avatar: string | Array<string>, name: string | Array<string>, date: string | Array<string>}) => {


  return (
    <div className={styles.news}>
      <img src={'/' + link} alt='' width={597} height={334}/>
      <Comment isNews={isNews} title={title} avatar={avatar} name={name} date={date}></Comment>
      <div className={styles.divider}></div>
      <div className={styles.dividerRight}></div>
    </div>
  )
}

export default News