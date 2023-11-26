"use client"
import { formatInTimeZone  } from 'date-fns-tz';
import React, { useState, useEffect } from 'react';
import style from './Clock.module.scss'
import Text from '@/components/Text/Text';

function Clock({data} : any) {
    const [time, setTime] = useState(new Date());
    const [dataCms, setDataCms] : any = useState(null)
    const [newData, setNewData] : any = useState()
    
    useEffect(() => {
        if(!data) {return}
        let formattedDate : any = new Date(data)
        setDataCms(formattedDate.getTime())
    },[data])
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if(!dataCms && !time){return}
        let date = dataCms - time.getTime()


        if(date <= 0){
            setNewData(0)
        } else{
            setNewData(new Date(date))
        }
    },[dataCms,time])
    console.log(newData)
    const date =!newData || newData?.getDate() ===1 ? 0 : newData?.getDate() - 1;
    const hours = newData ? newData?.getHours() : 0;
    const minutes = newData ? newData?.getMinutes() : 0;
    const seconds = newData ? newData?.getSeconds() : 0;
    //   const timeString = `${date}:${hours}:${minutes}:${seconds}`;
    const timeArroy = [
        { text: 'Days', date: date },
        { text: 'hours', date: hours },
        { text: 'Minutes', date: minutes },
        { text: 'Seconds', date: seconds },
    ]
    return (
        <div className={style.wrapperClock}>
            {
                timeArroy.map((_: any, i: number) => (
                    <div key={i + 428} className={style.containerDateWrap}>
                        <div className={style.containerDate}>
                            <Text>
                                <p>{_.date}</p>
                            </Text>
                            <Text>
                                <p>{_.text}</p>
                            </Text>
                        </div>
                        <Text>
                            <p>:</p>
                        </Text>
                    </div>
                ))
            }
        </div>
    );
}

export default Clock;