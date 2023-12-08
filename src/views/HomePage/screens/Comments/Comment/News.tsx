import React from 'react'
import styles from './News.module.scss'
import Comment from '@/components/Comment/Comment'
import ImageMy from '@/components/Image/ImageMy'

const News = ({isNews, link, title, avatar, name, date} : {isNews?: boolean | any ,link?: any ,title?: string | any, avatar?: string | any, name?: string | any, date?: string | any}) => {

  return (
    <div className={styles.news}>
      <div className={styles.imageContainer}>
        <span className={styles.loader}></span>
        {
          link &&
          <ImageMy src={link} width={600} height={334} alt={''}/>
        }
      </div>
      <Comment isNews={isNews} title={title} avatar={avatar} name={name} date={date}></Comment>
      {/* <div className={styles.divider}></div> */}
      {/* <div className={styles.dividerRight}></div> */}
    </div>
  )
}

export default News