'use client'

import { useEffect, useRef } from 'react'
import styles from './loading.module.scss'

export default function Loading({isOpacity}: {isOpacity: any}) {

    // useEffect(() => {
    //     const path: any = document.querySelector('.svg-path');
    //     const length = path.getTotalLength();
    //     console.log(length)
    // })

    const loaderRef: any = useRef(null)


    useEffect(() => {
        if(isOpacity && loaderRef.current){
            loaderRef.current.style.display = 'flex'
            loaderRef.current.style.opacity = 1
            setTimeout(() => {
                loaderRef.current.style.display = 'none'
            }, 3700)
        } else if (!isOpacity && loaderRef.current){
            loaderRef.current.style.opacity = 0
        }
    }, [isOpacity, loaderRef])

    return(
        <div ref={loaderRef} className={`${styles.loading}`}>
            {/* <svg className={styles.svgContainer} width="192" height="253" viewBox="0 0 192 253" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-path' strokeDasharray="890.959228515625" strokeDashoffset="890.959228515625" d="M5 5H166C176.333 18.3333 190.8 53.5 166 87.5M166 87.5C141.2 121.5 48.3333 122 5 118M166 87.5C148 118.7 51.1667 120.833 5 118M166 87.5C204.4 136.7 182 217 166 251M5 118V251" stroke="#583F21" stroke-width="9"/>
            </svg>
            <svg className={styles.svgContainer} width="176" height="246" viewBox="0 0 176 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-path' strokeDasharray="890.959228515625" strokeDashoffset="890.959228515625" d="M171.5 123C171.5 156.134 161.885 185.944 146.566 207.356C131.241 228.776 110.473 241.5 88 241.5C65.5267 241.5 44.7592 228.776 29.4344 207.356C14.1154 185.944 4.5 156.134 4.5 123C4.5 89.8659 14.1154 60.056 29.4344 38.6443C44.7592 17.2243 65.5267 4.5 88 4.5C110.473 4.5 131.241 17.2243 146.566 38.6443C161.885 60.056 171.5 89.8659 171.5 123Z" stroke="#583F21" stroke-width="9"/>
            </svg>
            <svg className={styles.svgContainer} width="166" height="241" viewBox="0 0 166 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-path' strokeDasharray="890.959228515625" strokeDashoffset="890.959228515625" d="M5 0V120.5M5 241V120.5M5 120.5H161V0V241" stroke="#583F21" stroke-width="9"/>
            </svg> */}
            <svg className={styles.svgContainer} width="632" height="182" viewBox="0 0 632 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='svg-path' d="M181 49.8619C181 58.4184 178.9 66.3744 174.7 73.73C170.65 80.9354 165.175 86.7148 158.275 91.0681C165.175 95.4214 170.65 101.276 174.7 108.631C178.9 115.837 181 123.718 181 132.274V181.136H165.925V132.274C165.925 122.967 162.625 115.086 156.025 108.631C149.425 102.026 141.475 98.7239 132.175 98.7239H16.075V181.136H1V83.4123H132.175C141.475 83.4123 149.425 80.1849 156.025 73.73C162.625 67.125 165.925 59.169 165.925 49.8619C165.925 40.5549 162.625 32.5989 156.025 25.9939C149.425 19.3889 141.475 16.0864 132.175 16.0864H1V1H132.175C145.675 1 157.15 5.80363 166.6 15.4109C176.2 24.868 181 36.3517 181 49.8619Z" stroke="#583F21" strokeDasharray="1166.710205078125" strokeDashoffset='1166.710205078125'/>
                <path d="M252.325 27.3449C269.875 9.78164 291.1 1 316 1C340.9 1 362.125 9.78164 379.675 27.3449C397.225 44.9082 406 66.1492 406 91.0681C406 115.987 397.225 137.228 379.675 154.791C362.125 172.355 340.9 181.136 316 181.136C291.1 181.136 269.875 172.355 252.325 154.791C234.775 137.228 226 115.987 226 91.0681C226 66.1492 234.775 44.9082 252.325 27.3449ZM278.425 156.142C289.975 162.747 302.5 166.05 316 166.05C329.5 166.05 342.025 162.747 353.575 156.142C365.125 149.387 374.2 140.23 380.8 128.671C387.55 117.113 390.925 104.578 390.925 91.0681C390.925 77.5579 387.55 65.0234 380.8 53.4647C374.2 41.9059 365.125 32.824 353.575 26.2191C342.025 19.4639 329.5 16.0864 316 16.0864C302.5 16.0864 289.975 19.4639 278.425 26.2191C266.875 32.824 257.725 41.9059 250.975 53.4647C244.375 65.0234 241.075 77.5579 241.075 91.0681C241.075 104.578 244.375 117.113 250.975 128.671C257.725 140.23 266.875 149.387 278.425 156.142ZM323.875 83.1871C326.125 85.2887 327.25 87.9157 327.25 91.0681C327.25 94.2205 326.125 96.9225 323.875 99.1742C321.775 101.276 319.15 102.327 316 102.327C312.85 102.327 310.15 101.276 307.9 99.1742C305.8 96.9225 304.75 94.2205 304.75 91.0681C304.75 87.9157 305.8 85.2887 307.9 83.1871C310.15 80.9354 312.85 79.8096 316 79.8096C319.15 79.8096 321.775 80.9354 323.875 83.1871Z" stroke="#583F21" strokeDasharray="1166.710205078125" strokeDashoffset='1166.710205078125'/>
                <path d="M615.925 83.4123V1H631V181.136H615.925V98.7239H466.075V181.136H451V1H466.075V83.4123H615.925Z" stroke="#583F21" strokeDasharray="1166.710205078125" strokeDashoffset='1166.710205078125'/>
            </svg>

        </div>
    )
}