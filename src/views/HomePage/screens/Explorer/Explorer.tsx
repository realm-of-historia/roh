import React from 'react'
import styles from './Explorer.module.scss'


const Explorer = () => {


  return (
    <div className={styles.main}>
        <div className={styles.explorerImage}>
          <img src='Slider image.png' alt='' width={1920} height={720}/>
        </div>
        <p>UNLeASH YOUR INNeR eXPLOReR</p>
    </div>
  )
}

export default Explorer