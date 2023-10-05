import React from 'react'
import styles from './UserInfo.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import Divider from '@/components/Divider/Divider'

export default function UserInfo() {
    return(
        <div className={styles.userInfo}>
            <div className={styles.left}>
                <img src='userImage.png' width={363} height={363} alt=''/>
            </div>
            <div className={styles.right}>
                <div className={styles.top}>
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
                <div className={styles.bottom}>
                    <div className={styles.section}>
                        <div className={styles.profit}>
                            <Text><Icon label='arrow-down'></Icon></Text>
                            <Text><p>$4.500</p></Text>
                        </div>
                        <Text><p className={styles.cost}>total cost</p></Text>
                    </div>
                    <Divider position={'top right'}></Divider>
                    <div className={styles.section}>
                        <div className={styles.profit}>
                            <Text><Icon label='arrow-up'></Icon></Text>
                            <Text><p>80</p></Text>
                        </div>
                        <Text><p className={styles.cost}>NFT'S</p></Text>
                    </div>
                </div>
            </div>
        </div>
    )
}