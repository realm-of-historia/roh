import React from 'react'
import styles from './Posts.module.scss'
import PostBlock from './PostBlock/PostBlock'
import Text from '@/components/Text/Text'


const Posts = ({ dataArticleLast, title} : {dataArticleLast? : any, title? : any}) => {
  // console.log(dataArticleLast)

  return (
    <div className={styles.posts}>
       <p className={styles.title}>{title}</p>
        <div className={styles.text}>
            {/* {Array.isArray(secondText) ? text.map((el, _) => (
                <PostBlock key={el} text={text[_]} secondText={secondText[_]}></PostBlock>    
            )) : <></>} */}
            {
              dataArticleLast && 
              dataArticleLast?.data.map((_ : any, i : any) => (
                <PostBlock key={i + 7681} title={_.attributes.title} href={_?.attributes.uid || '/'}></PostBlock>    
              ))
            }
        </div>
    </div>
  )
}

export default Posts