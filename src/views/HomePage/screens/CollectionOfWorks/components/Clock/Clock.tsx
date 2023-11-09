"use client"

import React, { useState, useEffect } from 'react';
import style from './Clock.module.scss'
import Text from '@/components/Text/Text';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
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