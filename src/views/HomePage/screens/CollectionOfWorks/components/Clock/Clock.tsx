"use client"

import React, { useState, useEffect } from 'react';
import style from './Clock.module.scss'

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
                    <div className={style.containerDateWrap}>
                        <div className={style.containerDate}>
                            <p>{_.date}</p>
                            <p>{_.text}</p>
                        </div>
                        <p>:</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Clock;