

import React from 'react'
import styles from './Carahunge.module.scss'
import Column from './Column/Column'
import Avatar from '@/components/Header/Avatar/Avatar'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'
import { useAuthStore } from '@/store/store'
export interface StandardComponentProps {
    data?: any
}
const Carahunge = ({ data }: StandardComponentProps) => {


    return (
        <div className={styles.carahunge}>
            <Divider position={"top right"} />
            <div className={styles.left}>
                <Text>
                    <p>
                        {data?.title}
                    </p>
                </Text>
                {
                    data?.date &&
                    <Text>
                        <button className={styles.button}>
                            {data?.date}
                        </button>
                    </Text>
                }

            </div>
            <Column description={data?.description} iconLink={data?.iconLink} link={data?.link} icon={'globe'}></Column>
        </div>
    )
}

export default Carahunge