
import style from './Roadmap.module.scss'


import React from 'react'
import styles from './Roadmap.module.scss'
import Text from '@/components/Text/Text';
import InitiationX from '../CarahungeXPageComponents/InitiationX/InitiationX';
import Divider from '../Divider/Divider';

const Roadmap = ({ data }: any) => {



    return (
        <div className={styles.main}>
            <Text>
                <p className={styles.title}>{data?.header}</p>
            </Text>
            <div className={styles.column}>
                <Divider position={'top left'} noAnim={true} />
                <Divider position={'top right'} horizontal={true} noAnim={true} />
                <Divider position={'bottom right'} horizontal={true} noAnim={true} />
                {data?.table.map((item: any, index: number) => (
                        <InitiationX key={index + 23443} data={item} road={true}/>
                ))}
            </div>
        </div>
    )
}

export default Roadmap