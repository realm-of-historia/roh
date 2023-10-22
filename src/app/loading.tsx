'use client'

import { useEffect } from 'react'
import styles from './loading.module.scss'

export default function Loading() {

    useEffect(() => {
        const path: any = document.querySelector('.svg-path');
        const length = path.getTotalLength();
        console.log(length)
    })

    return(
        <div className={styles.loading}>
            <svg className={styles.svgContainer} width="192" height="253" viewBox="0 0 192 253" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-path' strokeDasharray="890.959228515625" strokeDashoffset="890.959228515625" d="M5 5H166C176.333 18.3333 190.8 53.5 166 87.5M166 87.5C141.2 121.5 48.3333 122 5 118M166 87.5C148 118.7 51.1667 120.833 5 118M166 87.5C204.4 136.7 182 217 166 251M5 118V251" stroke="#583F21" stroke-width="9"/>
            </svg>
            <svg className={styles.svgContainer} width="176" height="246" viewBox="0 0 176 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-path' strokeDasharray="890.959228515625" strokeDashoffset="890.959228515625" d="M171.5 123C171.5 156.134 161.885 185.944 146.566 207.356C131.241 228.776 110.473 241.5 88 241.5C65.5267 241.5 44.7592 228.776 29.4344 207.356C14.1154 185.944 4.5 156.134 4.5 123C4.5 89.8659 14.1154 60.056 29.4344 38.6443C44.7592 17.2243 65.5267 4.5 88 4.5C110.473 4.5 131.241 17.2243 146.566 38.6443C161.885 60.056 171.5 89.8659 171.5 123Z" stroke="#583F21" stroke-width="9"/>
            </svg>
            <svg className={styles.svgContainer} width="166" height="241" viewBox="0 0 166 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-path' strokeDasharray="890.959228515625" strokeDashoffset="890.959228515625" d="M5 0V120.5M5 241V120.5M5 120.5H161V0V241" stroke="#583F21" stroke-width="9"/>
            </svg>

        </div>
    )
}