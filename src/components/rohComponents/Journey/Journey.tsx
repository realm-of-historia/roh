"use client"

import { useEffect, useMemo, useRef } from 'react'
import styles from './Journey.module.scss'
import ImageMy from '@/components/Image/ImageMy'
import Text from '@/components/Text/Text'
interface Panegliph {
    data?: any,
    img?: string
}
const Journey = ({ data, img }: Panegliph) => {

    return (
        <div className={styles.container} style={{ background: `url(https://api.realmofhistoria.com${img})`, backgroundSize: 'cover' }} >
            <div className={styles.wrapperInfo}>
                <Text>
                    <h2>{data?.name}</h2>
                </Text>
                <Text>
                    <p>{data?.description}</p>
                </Text>
            </div>
        </div>
    )
}

export default Journey