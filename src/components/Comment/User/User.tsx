"use client"

import React, { useMemo } from 'react'
import styles from './User.module.scss'
import Text from '@/components/Text/Text'
import ImageMy from '@/components/Image/ImageMy'


const User = ({avatar, name, date, title} : {avatar: string | Array<string>, name: string | Array<string>, date: any | Array<string>, title?: string | Array<string> | undefined}) => {

  const image = title ? styles.newsImage : styles.commentImage
  const newDate = useMemo(() => {
    if(!date) {return}
    const dateMy = new Date(date);
    const options : any = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = dateMy.toLocaleDateString('en-US', options);
    return formattedDate
  },[date])
  
  return (
    <div className={styles.user}>
        {/* <Text><img className={image} src={`/${avatar}.png`} alt='' width={48} height={48}/></Text> */}
        <Text><div className={image}><ImageMy src={avatar} alt='' width={48} height={48}/></div></Text>
        <div>
          {title ? <Text><p className={styles.titleNews}>{title}</p></Text> : <></>}
          <Text><p>{name} on {newDate}</p></Text>
        </div>
    </div>
  )
}

export default User