import React from 'react'
import styles from './UserInfo.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import Divider from '@/components/Divider/Divider'

export default function UserInfo() {
    return(
        <div className={styles.userInfo}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src='userImage.png' width={363} height={363} alt=''/>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <div className={styles.first}>
                                    <p className={styles.name}>
                                        Vasya Pupkin
                                    </p>
                                <div className={styles.verification}>
                                    <div><Icon label='checked'></Icon></div>
                                    <div><p>Verified</p></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progress}>
                            <div className={styles.first}>
                                <div>
                                    <p>
                                        Profile compleation
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        50%
                                    </p>
                                </div>
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
                                <div><Icon label='arrow-down'></Icon></div>
                                <div><p>$4.500</p></div>
                            </div>
                            <p className={styles.cost}>total cost</p>
                        </div>
                        <Divider position={'top right'}></Divider>
                        <div className={styles.section}>
                            <div className={styles.profit}>
                                <div><Icon label='arrow-up'></Icon></div>
                                <div><p>80</p></div>
                            </div>
                            <p className={styles.cost}>NFT&apos;S</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSecond}>
                <div className={styles.section}>
                    <div className={styles.profit}>
                        <div><Icon label='arrow-down'></Icon></div>
                        <div><p>$4.500</p></div>
                    </div>
                    <p className={styles.cost}>total cost</p>
                </div>
                <Divider position={'top right'}></Divider>
                <div className={styles.section}>
                    <div className={styles.profit}>
                        <div><Icon label='arrow-up'></Icon></div>
                        <div><p>80</p></div>
                    </div>
                    <p className={styles.cost}>NFT&apos;S</p>
                </div>
            </div>
        </div>
    )
}