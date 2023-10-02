import React from 'react'
import styles from './GreatTeam.module.scss'
import Ancient from '@/components/Ancient/Ancient'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'

const GreatTeam = () => {


  return (
    <div className={styles.team}>
        <Divider position={'left top'}></Divider>
        <div className={styles.left}>
            <Ancient></Ancient>
        </div>
        <div className={styles.right}>
            <Text>
                <p>
                    OUR GReAT TeAM
                </p>
            </Text>
            <div className={styles.dividerTop}></div>
        </div>
    </div>
  )
}

export default GreatTeam