// import React from 'react'
import Column from './Column/Column'
import styles from './OurVision.module.scss'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'
export interface StandardComponentProps {
    data?: any,
    title?: any,
}
const OurVision = ({ data, title }: StandardComponentProps) => {



    return (
        <div className={styles.vision}>
            <Divider position={"bottom left"} horizontal={true}></Divider>
            <Divider position={"top left"} horizontal={true} />
            <Divider position={"top left"} />
            <div className={styles.left}>
                <Text><p>{title}</p></Text>
            </div>
            {
                data &&
                <div className={styles.right}>
                    <Column data={data}></Column>
                </div>
            }

        </div>
    )
}

export default OurVision