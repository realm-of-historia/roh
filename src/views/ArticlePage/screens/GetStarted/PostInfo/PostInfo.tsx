import React from 'react'
import styles from './PostInfo.module.scss'
import Icon from '@/components/UI/Icon/Icon';
import Text from '@/components/Text/Text';

const PostInfo = ({label, text} : {label: string | Array<string>, text: string | Array<string>}) => {


    return (
        <div className={styles.postInfo}>
            <Text><Icon label={label}></Icon></Text>
            <Text><p>{text}</p></Text>
        </div>
    )
}

export default PostInfo;