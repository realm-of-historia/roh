import React from 'react'
import styles from './PostBlock.module.scss'
import Text from '@/components/Text/Text'


const PostBlock = ({text, secondText} : {text: string | Array<string>, secondText: string | Array<string>}) => {


  return (
    <div className={styles.postBlock}>
        <div className={styles.text}>
            <Text><p>{text}</p></Text>
            <Text><p>{secondText}</p></Text>
        </div>
    </div>
  )
}

export default PostBlock