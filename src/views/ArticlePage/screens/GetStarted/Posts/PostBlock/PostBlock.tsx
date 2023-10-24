import React from 'react'
import styles from './PostBlock.module.scss'
import Text from '@/components/Text/Text'
import Link from 'next/link'


const PostBlock = ({title, href} : {title: string | Array<string>, href: string | any}) => {


  return (
    <div className={styles.postBlock}>
        <Link href={href || '/'} className={styles.text}>
            <p>{title}</p>
            {/* <p>{secondText}</p> */}
        </Link>
    </div>
  )
}

export default PostBlock