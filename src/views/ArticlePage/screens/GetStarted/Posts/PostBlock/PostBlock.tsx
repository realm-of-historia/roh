import React from 'react'
import styles from './PostBlock.module.scss'


const PostBlock = ({text, secondText} : {text: string | Array<string>, secondText: string | Array<string>}) => {


  return (
    <div className={styles.postBlock}>
        <div className={styles.text}>
            <p>{text}</p>
            <p>{secondText}</p>
        </div>
    </div>
  )
}

export default PostBlock