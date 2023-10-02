import React from 'react'
import styles from './User.module.scss'
import Text from '@/components/Text/Text'


const User = ({avatar, name, date, title} : {avatar: string | Array<string>, name: string | Array<string>, date: string | Array<string>, title?: string | Array<string> | undefined}) => {

  const image = title ? styles.newsImage : styles.commentImage

  return (
    <div className={styles.user}>
        <Text><img className={image} src={`/${avatar}.png`} alt='' width={48} height={48}/></Text>
        <div>
          {title ? <Text><p className={styles.titleNews}>{title}</p></Text> : <></>}
          <Text><p>{name} on {date}</p></Text>
        </div>
    </div>
  )
}

export default User