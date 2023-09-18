import React from 'react'
import styles from './Posts.module.scss'

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
            <p>
                LATeST INSTAGRAM POSTS
            </p>
        </div>
    </div>
  )
}

export default Posts