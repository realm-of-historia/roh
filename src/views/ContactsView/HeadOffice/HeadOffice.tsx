import React, { useState } from 'react';
import styles from './HeadOffice.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export interface StandardComponentProps {
    contacts?: any,
    socialMedia?: any
}
export default function HeadOffice({ contacts, socialMedia }: StandardComponentProps) {

    return (
        <div className={styles.headOffice}>
            <div className={styles.container}>
                {
                    contacts?.map((_: any, i: number) => (
                        <div key={i + 88} className={styles.right}>
                            <div className={styles.logo}>
                                <div><p className={styles.first}>{_.title}</p></div>
                                <div><p className={styles.second}>{_.meaning}</p></div>
                            </div>
                            <div className={`${styles.divider} ${styles.block}`}></div>
                            <div className={`${styles.topFirst} ${styles.block}`}></div>
                            <div className={`${styles.topSecond} ${styles.block}`}></div>
                            <div className={`${styles.left} ${styles.block}`}></div>
                            <div className={`${styles.right} ${styles.block}`}></div>
                            <div className={`${styles.mainCircle} ${styles.block}`}></div>
                            <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                            <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                            <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                            <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                        </div>
                    ))
                }
                {/* <div className={styles.left}>
                    <div className={styles.logo}>
                        <div><p className={styles.first}>LeT`&#34;`S SPeAK</p></div>
                        <div><p className={styles.second}>1 (833) 597-7538</p></div>
                    </div>
                    <div className={`${styles.divider} ${styles.block}`}></div>
                    <div className={`${styles.topFirst} ${styles.block}`}></div>
                    <div className={`${styles.topSecond} ${styles.block}`}></div>
                    <div className={`${styles.left} ${styles.block}`}></div>
                    <div className={`${styles.right} ${styles.block}`}></div>
                    <div className={`${styles.mainCircle} ${styles.block}`}></div>
                    <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                </div>
                <div className={styles.right}>
                    <div className={styles.logo}>
                        <div><p className={styles.first}>OUR HeAD OFFICe</p></div>
                        <div><p className={styles.second}>Churchill-laan 16 II, 1052 CD, Amsterdam</p></div>
                    </div>
                    <div className={`${styles.divider} ${styles.block}`}></div>
                    <div className={`${styles.topFirst} ${styles.block}`}></div>
                    <div className={`${styles.topSecond} ${styles.block}`}></div>
                    <div className={`${styles.left} ${styles.block}`}></div>
                    <div className={`${styles.right} ${styles.block}`}></div>
                    <div className={`${styles.mainCircle} ${styles.block}`}></div>
                    <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                </div> */}
            </div>
            <div className={styles.officeFooter}>
                {/* <div className={styles.block}><div > <p>Facebook</p></div></div>
                <div className={styles.block}><div ><p>Instagram</p></div></div>
                <div className={styles.block}><div ><p>GitHub</p></div></div>
                <div className={styles.block}><div ><p>Behance</p></div></div>
                <div className={styles.block}><div ><p>Pinterest</p></div></div>
                <div className={styles.block}><div ><p>Twitter</p></div></div>
                <div className={styles.block}><div ><p>Dribbble</p></div></div> */}
                {
                    socialMedia?.map((_: any, i: number) => (
                        <Link href={_.href} key={i + 99} className={styles.block}><div ><p>{_.name}</p></div></Link>
                    ))
                }
            </div>
        </div>
    );
}