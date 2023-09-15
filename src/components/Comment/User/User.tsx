import React from 'react'
import styles from './User.module.scss'


const User = ({avatar, name, date, title} : {avatar: string | Array<string>, name: string | Array<string>, date: string | Array<string>, title?: string | Array<string> | undefined}) => {

  const image = title ? styles.newsImage : styles.commentImage

  return (
    <div className={styles.user}>
        <img className={image} src={`${avatar}.png`} alt='' width={48} height={48}/>
        <div>
          {title ? <p className={styles.titleNews}>{title}</p> : <></>}
          <p>{name} on {date}</p>
        </div>
    </div>
  )
}

export default User