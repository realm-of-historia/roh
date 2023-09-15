import React from 'react'
import styles from './Avatar.module.scss'


const Avatar = () => {


  return (
    <div className={styles.avatar}>
        <picture>
            <img src='Avatar.png' alt='' width={38} height={38}/>
        </picture>
    </div>
  )
}

export default Avatar