import React from 'react'
import styles from './UserInfo.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'

export default function UserInfo() {
    return(
        <div className={styles.userInfo}>
            <div className={styles.left}>
                <img src='userImage.png' width={363} height={363} alt=''/>
            </div>
            <div className={styles.right}>
                <div className={styles.info}>
                    <div className={styles.first}>
                        <Text>
                            <p className={styles.name}>
                                Vasya Pupkin
                            </p>
                        </Text>
                        <div className={styles.verification}>
                            <Text>
                                <Icon label='checked'></Icon>
                            </Text>
                            <Text>
                                <p>Verified</p>
                            </Text>
                        </div>
                    </div>
                    <div className={styles.second}>
                        {/* dropdowns  */}
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.first}>
                        <Text>
                            <p>
                                Profile compleation
                            </p>
                        </Text>
                        <Text>
                            <p>
                                50%
                            </p>
                        </Text>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.leftLine}></div>
                        <div className={styles.rightLine}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}