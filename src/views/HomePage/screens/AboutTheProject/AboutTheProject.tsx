"use client"

import { useMemo, useState } from 'react'
import styles from './AboutTheProject.module.scss'
import { useWindowSize } from 'rooks';
import Divider from '@/components/Divider/Divider';

export interface StandardComponentProps {
    data?: any
}
const AboutTheProject = ({ data }: StandardComponentProps) => {
    const [dataNew, setDataNew]: any = useState([])
    const { innerWidth }: number | any = useWindowSize();

    useMemo(() => {
        const chunkSize = Math.ceil(data?.length / 3);
        const chunkedArrays: any = [];
        for (let i = 0; i < data?.length; i += chunkSize) {
            const chunk = data?.slice(i, i + chunkSize);
            chunkedArrays.push(chunk);
        }
        setDataNew(chunkedArrays)
    }, [data])
    console.log(dataNew)

    return (
        <div className={styles.container}>
            {
                innerWidth > 576 && data ?
                    <>
                        <div className={styles.wrapperColumn}>
                            {
                                dataNew[0]?.map((_: any, i: number) => (
                                    <div className={styles.cell}>
                                        <p>{_.name}</p>
                                        <p>{_.description}</p>
                                        <Divider position={"top left"} horizontal={true}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.wrapperColumn}>
                            <Divider position={"top right"}/>
                            <Divider position={"top left"}/>
                            {
                                dataNew[1]?.map((_: any, i: number) => (
                                    <div className={styles.cell}>
                                        <p>{_.name}</p>
                                        <p>{_.description}</p>
                                        <Divider position={"top left"} horizontal={true}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.wrapperColumn}>
                            {
                                dataNew[2]?.map((_: any, i: number) => (
                                    <div className={styles.cell}>
                                        <p>{_.name}</p>
                                        <p>{_.description}</p>
                                        <Divider position={"top left"} horizontal={true}/>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                    :
                    <></>
            }
        </div>
    )
}

export default AboutTheProject