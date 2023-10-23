import React from 'react'
import styles from './PostInfo.module.scss'
import Icon from '@/components/UI/Icon/Icon';
import Text from '@/components/Text/Text';
import ImageMy from '@/components/Image/ImageMy';

const PostInfo = ({label, text} : {label?: string | Array<string>, text?: string | Array<string>}) => {


    return (
        <div className={styles.postInfo}>
            {/* <Icon label={label}></Icon> */}
            <ImageMy src={label} width={15} height={15} alt={''}/>
            <p>{text}</p>
        </div>
    )
}

export default PostInfo;