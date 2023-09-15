import React from 'react'
import styles from './Videos.module.scss'

const Videos = () => {


  return (
    <div className={styles.videos}>
        <img src='Video-1.png' alt='' width={640} height={640}/>
        <img src='Video-2.png' alt='' width={640} height={640}/>
        <img src='Video.png' alt='' width={640} height={640}/>
    </div>
  )
}

export default Videos