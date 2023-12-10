'use client'

import React, { useEffect, useState } from 'react'
import styles from './Posts.module.scss'
import Text from '@/components/Text/Text'
import { useMemo } from 'react'
import { useInView } from "react-intersection-observer"
import Link from 'next/link'
import ImageMy from '@/components/Image/ImageMy'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import { useAuthStore } from '@/store/store'
export interface StandardComponentProps {
    data?: any,
    img?: any
}
const Posts = ({ data, img }: StandardComponentProps) => {
    const instagram: any = useAuthStore((state: any) => (state.instagram))
    const [dataNew, setDataNew]: any = useState(null)
    useEffect(() => {
        if (!instagram) return
        setDataNew(instagram)
    }, [instagram])
    const { ref, inView } = useInView()
    const handler = (href: any) => {
        window.open(href)
    }
    return (
        <>
            {
                dataNew &&
                <div className={styles.posts}>
                    <div className={styles.dividerTop}></div>
                    <div className={styles.left}>
                        {
                            dataNew?.post.map((_: any, i: number) => (
                                <div key={i + 834} onClick={() => handler(_.href)} className={styles.wrapperInstPost}>
                                    <ImageMy src={_?.post?.data?.attributes.url} width={320} height={320} alt='' />
                                </div>
                            ))
                        }
                    </div>
                    <WrapperTexture>
                        <div className={styles.right}>
                            <Link href={dataNew?.href || '/'}>
                                <Text>
                                    <p>
                                        {dataNew?.title}
                                    </p>
                                </Text>
                            </Link>
                        </div>
                    </WrapperTexture>
                </div>
            }
        </>
    )
}

export default Posts