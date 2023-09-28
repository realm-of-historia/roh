import React from 'react'
import styles from './Posts.module.scss'
import PostBlock from './PostBlock/PostBlock'
import Text from '@/components/Text/Text'


const Posts = ({text, secondText, title} : {text: Array<string>, secondText?: Array<string>, title?: string | Array<string> | undefined}) => {


  return (
    <div className={styles.posts}>
        <Text><p className={styles.title}>Recent Posts</p></Text>
        <div className={styles.text}>
            {Array.isArray(secondText) ? text.map((el, _) => (
                <PostBlock key={el} text={text[_]} secondText={secondText[_]}></PostBlock>    
            )) : <></>}
        </div>
    </div>
  )
}

export default Posts