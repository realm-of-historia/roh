import React from 'react'
import styles from './PostInfo.module.scss'
import Icon from '@/components/UI/Icon/Icon';

const PostInfo = ({label, text} : {label: string | Array<string>, text: string | Array<string>}) => {


    return (
        <div className={styles.postInfo}>
            <Icon label={label}></Icon>
            <p>{text}</p>
        </div>
    )
}

export default PostInfo;