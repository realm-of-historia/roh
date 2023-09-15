import React from 'react'
import styles from './Comment.module.scss'
import User from './User/User'

const Comment = ({ isNews, title, comment, avatar, name, date }: { isNews: boolean, title: string | Array<string>, comment?: string | undefined | Array<string>, avatar: string | Array<string>, name: string | Array<string>, date: string | Array<string> }) => {

  const titleClass = isNews ? styles.titleNews : styles.title;
  const containerClass = isNews ? styles.newsContainer : styles.commentContainer;

  return (
    <div className={styles.comment}>
      <div className={containerClass}>
        <div className={titleClass}>
          {isNews ? <></> : title.map((el: any) => (
            <p key={el}>{el}</p>
          ))}
        </div>
        {comment ? <p className={styles.text}>{comment}</p> : <></>}
        <User avatar={avatar} name={name} date={date} title={isNews ? title : ''}></User>
      </div>
    </div>
  )
}

export default Comment