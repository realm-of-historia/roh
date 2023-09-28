import React from 'react'
import styles from './Faces.module.scss'

const Faces = () => {


  return (
    <div className={styles.faces}>
        <img src='Post-1.png' alt='' width={640} height={640}/>
        <img src='Post-2.png' alt='' width={640} height={640}/>
        <img src='Post.png' alt='' width={640} height={640}/>
    </div>
  )
}

export default Faces