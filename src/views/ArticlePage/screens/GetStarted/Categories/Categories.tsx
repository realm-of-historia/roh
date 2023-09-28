import React from 'react'
import styles from './Categories.module.scss'
import Text from '@/components/Text/Text'


const Categories = ({text, numbers, title} : {text: string | Array<string>, numbers: string | Array<string>, title?: string | Array<string> | undefined}) => {


  return (
    <div className={styles.categories}>
        <Text><p className={styles.title}>Categories</p></Text>
        <div className={styles.text}>
            {Array.isArray(text) ? text.map((el) => (
              <Text key={el}><p>{el}</p></Text>
            )) : <></>}
        </div>
        <div className={styles.numbers}>
            {Array.isArray(numbers) ? numbers.map((el) => (
              <Text key={el}><p>{el}</p></Text>
            )) : <></>}
        </div>
    </div>
  )
}

export default Categories