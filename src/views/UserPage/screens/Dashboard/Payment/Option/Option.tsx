import React from 'react'
import styles from './Option.module.scss'
import Divider from '@/components/Divider/Divider'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'

export default function Option() {


    return(
        <div className={styles.option}>
            <Divider position={'left top'}></Divider>
            <Divider position={'right top'}></Divider>
            <div className={styles.choose}>
                <button><Text><p>Buy</p></Text></button>
                <button><Text><p>Sell</p></Text></button>
            </div>
            <div className={styles.coinName}>
                <div className={styles.text}>
                    <Text>
                        <p> 
                            Coin Name
                        </p>
                    </Text>
                    <Text>
                        <p>
                            Bitcoin/BTC
                        </p>
                    </Text>
                </div>
                <Text>
                    <Icon label='arrow-down'></Icon>
                </Text>
            </div>
            <div className={styles.money}>
                <div className={styles.text}>
                    <Text>
                        <p> 
                            Amount
                        </p>
                    </Text>
                    <Text>
                        <p>
                            $230.00
                        </p>
                    </Text>
                </div>
            </div>
            <div className={styles.amount}>
                <div className={styles.text}>
                    <Text>
                        <p> 
                            Amount
                        </p>
                    </Text>
                    <Text>
                        <p>
                            $230.00
                        </p>
                    </Text>
                </div>
            </div>
            <UserButtonBlack text='Make Payment' isPayment></UserButtonBlack>
        </div>
    )
}