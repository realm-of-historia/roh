import React from 'react'
import styles from './List.module.scss'
import { NextPage } from 'next'
import Text from '@/components/Text/Text'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import Markdown from 'react-markdown'

interface List {
    title: string,
    message?: string,
    importantMessage?: string,
  }
  

const List: NextPage<List> = ({title, message}) => {
  return (
    <div className={styles.main}>
        <div className={styles.divider}></div>
        <div className={styles.text}>
            <div>
              <p>
                  {title}
              </p>
            </div>
            <div>
            {/* <p>
                {message} <span>{importantMessage}</span>
            </p> */}
            <Markdown>{message}</Markdown>
          </div>
        </div>
    </div>
  )
}

export default List