import React from 'react'
import styles from './News.module.scss'
import Comment from '@/components/Comment/Comment'

const News = ({isNews, link, title, avatar, name, date} : {isNews: boolean ,link: string ,title: string | Array<string>, avatar: string | Array<string>, name: string | Array<string>, date: string | Array<string>}) => {


  return (
    <div className={styles.news}>
      <div className={styles.imageContainer}>
        <video muted playsInline loop autoPlay>
          <source src={'/' + link + '.mp4'} type="video/mp4" />
        </video>
      </div>
      <Comment isNews={isNews} title={title} avatar={avatar} name={name} date={date}></Comment>
      <div className={styles.divider}></div>
      <div className={styles.dividerRight}></div>
    </div>
  )
}

export default News