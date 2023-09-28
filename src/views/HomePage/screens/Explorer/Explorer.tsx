import React from 'react'
import styles from './Explorer.module.scss'
import Text from '@/components/Text/Text'


const Explorer = () => {


  return (
    <div className={styles.main}>
        <div className={styles.explorerImage}>
          <img src='Slider image.png' alt='' width={1920} height={720}/>
        </div>
        <Text><p>UNLeASH YOUR INNeR eXPLOReR</p></Text>
    </div>
  )
}

export default Explorer