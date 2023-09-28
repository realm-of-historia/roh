import React from 'react'
import styles from './RunningLine.module.scss'

const RunningLine = ({ text }: { text: string }) => {

  const items = Array(30).fill(null).map((_, index) => (
    <p key={index}>{text}</p>
  ));

  return (
    <div className={styles.runningLine}>
      <div className={styles.track}>
        <div className={styles.content}>
          {items}
        </div>
      </div>
    </div>
  )
}

export default RunningLine