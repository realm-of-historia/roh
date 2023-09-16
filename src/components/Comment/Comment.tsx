import React from 'react'
import styles from './Comment.module.scss'
import User from './User/User'

const Comment = ({ isNews, title, comment, avatar, name, date }: { isNews: boolean, title: string | string[], comment?: string | undefined | string | string[], avatar: string | string[], name: string | string[], date: string | string[] }) => {

  const titleClass = isNews ? styles.titleNews : styles.title;
  const containerClass = isNews ? styles.newsContainer : styles.commentContainer;

  return (
    <div className={styles.comment}>
      <div className={containerClass}>
        <div className={titleClass}>
        {isNews ? null : Array.isArray(title) ? (
            title.map((el: string) => <p key={el}>{el}</p>)
          ) : (
            <p>{title}</p>
          )}
        </div>
        {comment ? <p className={styles.text}>{comment}</p> : <></>}
        <User avatar={avatar} name={name} date={date} title={isNews ? title : ''}></User>
      </div>
    </div>
  )
}

export default Comment