import React from 'react'
import styles from './Comment.module.scss'
import User from './User/User'
import Text from '../Text/Text'
import Divider from '../Divider/Divider'

const Comment = ({ isNews, title, comment, avatar, name, date, isDivider }: { isNews?: boolean, title: string | string[], comment?: string | undefined | string | string[], avatar: string | string[], name: string | string[], date: string | string[], isDivider?: boolean }) => {

  const titleClass = isNews ? styles.titleNews : styles.title;
  const containerClass = isNews ? styles.newsContainer : styles.commentContainer;
  const dividerBottom = isNews ? styles.dividerBottomComment : styles.dividerBottomNews

  return (
    <div className={styles.comment}>
      {isDivider ? <Divider position={"bottom left"} horizontal={true}></Divider> : <div className={styles.deleter}></div>}
      <div className={containerClass}>
        <div className={titleClass}>
          {isNews ? null : Array.isArray(title) ? (
            title?.map((el: string) => <Text key={el}><p>{el}</p></Text>)
          ) : (
            <>
              {
                title &&
                <Text><p>{title}</p></Text>
              }
            </>
          )}
        </div>
        {comment ? <Text><p className={styles.text}>{comment}</p></Text> : <></>}
        <User avatar={avatar} name={name} date={date} title={isNews ? title : ''}></User>
      </div>
    </div>
  )
}

export default Comment