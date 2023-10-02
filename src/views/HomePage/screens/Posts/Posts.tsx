'use client'

import React from 'react'
import styles from './Posts.module.scss'
import Text from '@/components/Text/Text'
import {useMemo} from 'react'
import { useInView } from "react-intersection-observer"
import Link from 'next/link'
import { NativeUnderpin } from '@/components/NativeUnderpin/NativeUnderpin'

const Posts = () => {

    const { ref, inView } = useInView()


  return (
    <NativeUnderpin>
        <div className={styles.posts}>
            <div className={styles.dividerTop}></div>
            <div className={styles.left}>
                <div className={styles.container} ref={ref}>
                    <div className={`${styles.animCircle} ${inView ? styles.animCircleActive : ''}`}></div>
                    <div className={styles.dividerBottom}></div>
                    <div className={styles.dividerRight}></div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.animCircle} ${inView ? styles.animCircleActive : ''}`}></div>
                    <div className={styles.dividerBottom}></div>
                    <div className={styles.dividerRight}></div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.animCircle} ${inView ? styles.animCircleActive : ''}`}></div>
                    <div className={styles.dividerBottom}></div>
                    <div className={styles.dividerRight}></div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.animCircle} ${inView ? styles.animCircleActive : ''}`}></div>
                    <div className={styles.dividerBottom}></div>
                    <div className={styles.dividerRight}></div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.animCircle} ${inView ? styles.animCircleActive : ''}`}></div>
                    <div className={styles.dividerBottom}></div>
                    <div className={styles.dividerRight}></div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.animCircle} ${inView ? styles.animCircleActive : ''}`}></div>
                    <div className={styles.dividerBottom}></div>
                    <div className={styles.dividerRight}></div>
                </div>
            </div>
            <div className={styles.right}>
                <Link href='/marketplace'>
                    <Text>
                        <p>
                            LATeST INSTAGRAM POSTS
                        </p>
                    </Text>
                </Link>
            </div>
        </div>
    </NativeUnderpin>
  )
}

export default Posts