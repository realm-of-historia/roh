import React, { useState } from 'react'
import styles from './Avatar.module.scss'

const Avatar = () => {

  return (
    <div
      className={styles.avatar}
    >
      <picture>
        <img src='Avatar.png' alt='' width={38} height={38}/>
      </picture>
        <div className={styles.dropdown}>
            <div className={styles.userInfo}>
            <div className={styles.leftDivider}></div>
            <div className={styles.bottomDivider}></div>
              <img src='Avatar.png' width={38} height={38}/>
              <div className={styles.container}>
                <p>
                  Robert Fox
                </p>
                <p>
                  robert@kt.com
                </p>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.options}>
              <p>My Profile</p>
              <p>My Projects</p>
              <p>My Subscription</p>
              <p>My Statement</p>
            </div>
        </div>
    </div>
  )
}

export default Avatar
