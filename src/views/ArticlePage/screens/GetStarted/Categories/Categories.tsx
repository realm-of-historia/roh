import React from 'react'
import styles from './Categories.module.scss'
import Text from '@/components/Text/Text'


const Categories = ({ title, data }: { title?: string | Array<string> | undefined, data?: any }) => {


  return (
    <div className={styles.categories}>
      <p className={styles.title}>{title}</p>
      <div className={styles.containerInfo}>
        {
          data?.map((_: any, i: number) => (
            <div key={i + 3214} className={styles.wrapperInfo}>
              <p>{_.name}</p>
              <p>{_.number}</p>
            </div>
          ))
        }
      </div>
      {/* <>
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
          </> */}

    </div>
  )
}

export default Categories