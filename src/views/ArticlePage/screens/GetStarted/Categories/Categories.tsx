import React from 'react'
import styles from './Categories.module.scss'
import Text from '@/components/Text/Text'


const Categories = ({text, numbers, title} : {text: string | Array<string>, numbers: string | Array<string>, title?: string | Array<string> | undefined}) => {


  return (
    <div className={styles.categories}>
        <p className={styles.title}>Categories</p>
        <div className={styles.text}>
            {Array.isArray(text) ? text.map((el) => (
              <p key={el}>{el}</p>
            )) : <></>}
        </div>
        <div className={styles.numbers}>
            {Array.isArray(numbers) ? numbers.map((el) => (
              <p key={el}>{el}</p>
            )) : <></>}
        </div>
    </div>
  )
}

export default Categories