import React from 'react'
import styles from './Founder.module.scss'
import Text from '@/components/Text/Text'
import ImageMy from '@/components/Image/ImageMy'
import Divider from '@/components/Divider/Divider'


const Founder = ({ avatar, name, title }: { avatar: string | Array<string>, name: string | Array<string>, title?: string | Array<string> | undefined }) => {


  return (
    <div className={styles.founder}>
      <Divider position={'top left'} horizontal={true} noAnim={true} />
      {
        avatar &&
        <ImageMy src={avatar} alt='' width={80} height={80} />
      }
      <div>
        {
          title &&
          <p className={styles.text}>{title}</p>
        }
        {
          name &&
          <p>{name}</p>
        }
      </div>
      <div className={styles.topDivider}></div>
    </div>
  )
}

export default Founder