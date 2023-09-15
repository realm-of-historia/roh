import React from 'react'
import styles from './Ancient.module.scss'


const Ancient = () => {


  return (
    <div className={styles.ancient}>
        <div className={styles.container}>
            <img src='ancients.png' alt='' width={1920} height={480}/>
        </div>
    </div>
  )
}

export default Ancient