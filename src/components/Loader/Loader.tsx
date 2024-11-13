import React from 'react'
import styles from './Loader.module.scss'


const Loader = () => {


  return (
    <div className={styles.main}>
        <div className={styles.anim}>
            <div></div><div></div><div></div><div></div>
        </div>
    </div>
  )
}

export default Loader

