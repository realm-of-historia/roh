"use client"

import { useEffect, useMemo, useState } from 'react'
import styles from './AboutTheProject.module.scss'
import { useWindowSize } from 'rooks';
import Divider from '@/components/Divider/Divider';
import Text from '@/components/Text/Text';
import { useAuthStore } from '@/store/store';


const AboutTheProject = () => {
    const [dataNew, setDataNew]: any = useState([])
    const dataTheProject: any = useAuthStore((state: any) => (state.aboutTheProject))
    
    useMemo(() => {
        const chunkSize = Math.ceil(dataTheProject?.length / 3);
        const chunkedArrays: any = [];
        for (let i = 0; i < dataTheProject?.length; i += chunkSize) {
                const chunk = dataTheProject?.slice(i, i + chunkSize);
                chunkedArrays.push(chunk);
            
        }
        setDataNew(chunkedArrays)
        console.log(chunkedArrays)
    }, [dataTheProject])

    return (
        <div className={styles.container}>
            <Divider position={"bottom right"} horizontal={true} noAnim={true}/>
            {
             dataTheProject ?
                    <>
                        <div className={styles.wrapperColumn}>
                            {
                                dataNew[0]?.map((_: any, i: number) => (
                                    <div key={i + 861} className={styles.cell}>
                                        <Text>
                                            <p>{_.name}</p>
                                        </Text>
                                        <Text>
                                            <p>{_.description}</p>
                                        </Text>
                                        <Divider position={"top left"} horizontal={true}  noAnim={true}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.wrapperColumn}>
                            <Divider position={"top right"} noAnim={true}/>
                            <Divider position={"top left"} noAnim={true}/>
                            {
                                dataNew[1]?.map((_: any, i: number) => (
                                    <div key={i + 862} className={styles.cell}>
                                        <Text>
                                            <p>{_.name}</p>
                                        </Text>
                                        <Text>
                                            <p>{_.description}</p>
                                        </Text>
                                        <Divider position={"top left"} horizontal={true} noAnim={true}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.wrapperColumn}>
                            {
                                dataNew[2]?.map((_: any, i: number) => (
                                    <div key={i + 864} className={styles.cell}>
                                        <Text>
                                            <p>{_.name}</p>
                                        </Text>
                                        <Text>
                                            <p>{_.description}</p>
                                        </Text>
                                        <Divider position={"top left"} horizontal={true} noAnim={true}/>
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