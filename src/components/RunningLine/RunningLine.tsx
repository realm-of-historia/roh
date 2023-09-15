import React from 'react'
import styles from './RunningLine.module.scss'

const RunningLine = ({text} : {text: string})  => {


  return (
    <div className={styles.runningLine}>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
    </div>
  )
}

export default RunningLine