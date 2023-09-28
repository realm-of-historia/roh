import React from 'react'
import styles from './Posts.module.scss'
import Text from '@/components/Text/Text'

const Posts = () => {


  return (
    <div className={styles.posts}>
        <div className={styles.dividerTop}></div>
        <div className={styles.left}>
            <div className={styles.container}>
                <div></div>
                <div className={styles.dividerBottom}></div>
                <div className={styles.dividerRight}></div>
            </div>
            <div className={styles.container}>
                <div></div>
                <div className={styles.dividerBottom}></div>
                <div className={styles.dividerRight}></div>
            </div>
            <div className={styles.container}>
                <div></div>
                <div className={styles.dividerBottom}></div>
                <div className={styles.dividerRight}></div>
            </div>
            <div className={styles.container}>
                <div></div>
                <div className={styles.dividerBottom}></div>
                <div className={styles.dividerRight}></div>
            </div>
            <div className={styles.container}>
                <div></div>
                <div className={styles.dividerBottom}></div>
                <div className={styles.dividerRight}></div>
            </div>
            <div className={styles.container}>
                <div></div>
                <div className={styles.dividerBottom}></div>
                <div className={styles.dividerRight}></div>
            </div>
        </div>
        <div className={styles.right}>
            <Text>
                <p>
                    LATeST INSTAGRAM POSTS
                </p>
            </Text>
        </div>
    </div>
  )
}

export default Posts