import React, { useState } from 'react';
import styles from './HeadOffice.module.scss';
import Image from 'next/image';

export default function HeadOffice() {

    return (
        <div className={styles.headOffice}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <p>LeT`&#34;`S SPeAK</p>
                        <p>1 (833) 597-7538</p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.topFirst}></div>
                    <div className={styles.topSecond}></div>
                    <div className={styles.left}></div>
                    <div className={styles.right}></div>
                    <div className={styles.mainCircle}></div>
                    <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                </div>
                <div className={styles.right}>
                    <div className={styles.logo}>
                        <p>OUR HeAD OFFICe</p>
                        <p>Churchill-laan 16 II, 1052 CD, Amsterdam</p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.topFirst}></div>
                    <div className={styles.topSecond}></div>
                    <div className={styles.left}></div>
                    <div className={styles.right}></div>
                    <div className={styles.mainCircle}></div>
                    <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                    <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='Ellipse.svg' /></picture>
                </div>
            </div>
            <div className={styles.officeFooter}>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>GitHub</p>
                <p>Behance</p>
                <p>Pinterest</p>
                <p>Twitter</p>
                <p>Dribbble</p>
            </div>
        </div>
    );
}