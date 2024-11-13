

import React from 'react'
import styles from './Carahunge.module.scss'
import Column from './Column/Column'
import Avatar from '@/components/Header/Avatar/Avatar'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'
import { useAuthStore } from '@/store/store'
import Link from 'next/link'
export interface StandardComponentProps {
    data?: any,
    road?: boolean
}
const Carahunge = ({ data, road }: StandardComponentProps) => {


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
                        <Link href={data?.buttonHref || '/'} className={styles.button}>
                            {data?.date}
                        </Link>
                    </Text>
                }

            </div>
            <Column description={data?.description} iconLink={data?.iconLink} link={data?.link} icon={'globe'}></Column>
        </div>
    )
}

export default Carahunge