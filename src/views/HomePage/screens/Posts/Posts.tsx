'use client'

import React from 'react'
import styles from './Posts.module.scss'
import Text from '@/components/Text/Text'
import { useMemo } from 'react'
import { useInView } from "react-intersection-observer"
import Link from 'next/link'
import { NativeUnderpin } from '@/components/NativeUnderpin/NativeUnderpin'
import ImageMy from '@/components/Image/ImageMy'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
export interface StandardComponentProps {
    data?: any,
    img?: any
}
const Posts = ({ data, img }: StandardComponentProps) => {
    const { ref, inView } = useInView()
    console.log(data)
    const handler= (href : any) => {
        window.open(href)
      }
    return (
        // <NativeUnderpin>
            <div className={styles.posts}>
                <div className={styles.dividerTop}></div>
                <div className={styles.left}>
                    {/* <div className={styles.container} ref={ref}>
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
                </div> */}
                    {
                        img?.data.map((_: any, i: number) => (
                            <div key={i + 834} onClick={() => handler('https://www.instagram.com/realmofhistoria/')} className={styles.wrapperInstPost}>
                                <ImageMy src={_.attributes.url} width={320} height={320} alt='' />
                            </div>
                        ))
                    }
                </div>
                <WrapperTexture>
                    <div className={styles.right}>
                        <Link href={data?.href || '/'}>
                            <Text>
                                <p>
                                    {data?.name}
                                </p>
                            </Text>
                        </Link>
                    </div>
                </WrapperTexture>
            </div>
        // </NativeUnderpin>
    )
}

export default Posts