import React from 'react'
import styles from './Bundle.module.scss'

const Bundle = ({title, price, image}: {title: string | Array<string>, price: string | Array<string>, image: string | Array<string>}) => {


  return (
    <div className={styles.bundle}>
        <div className={styles.imageContainer}>
            <img src={`${image}.png`} alt='' width={480} height={480}/>
            <div className={styles.dividerTop}></div>
            <div className={styles.dividerBottom}></div>
        </div>
        <div className={styles.dividerRight}></div>
        <div className={styles.title}>
            <p className={styles.first}>
                Title
            </p>
            <p className={styles.second}>
                {title}
            </p>
        </div>
        <div className={styles.price}>
            <p className={styles.first}>
                Purchase
            </p>
            <p className={styles.second}>
                {price}
            </p>
        </div>
    </div>
  )
}

export default Bundle