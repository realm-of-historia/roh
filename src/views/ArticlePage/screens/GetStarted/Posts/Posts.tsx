import React from 'react'
import styles from './Posts.module.scss'
import PostBlock from './PostBlock/PostBlock'


const Posts = ({text, secondText, title} : {text: Array<string>, secondText?: Array<string>, title?: string | Array<string> | undefined}) => {


  return (
    <div className={styles.posts}>
        <p className={styles.title}>Recent Posts</p>
        <div className={styles.text}>
            {Array.isArray(secondText) ? text.map((el, _) => (
                <PostBlock key={el} text={text[_]} secondText={secondText[_]}></PostBlock>    
            )) : <></>}
        </div>
    </div>
  )
}

export default Posts