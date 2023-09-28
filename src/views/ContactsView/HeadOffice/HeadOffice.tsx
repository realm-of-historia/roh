import React, { useState } from 'react';
import styles from './HeadOffice.module.scss';
import Image from 'next/image';
import Text from '@/components/Text/Text';

export default function HeadOffice() {

    return (
        <div className={styles.headOffice}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Text><p className={styles.first}>LeT`&#34;`S SPeAK</p></Text>
                        <Text><p className={styles.second}>1 (833) 597-7538</p></Text>
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
                        <Text><p className={styles.first}>OUR HeAD OFFICe</p></Text>
                        <Text><p className={styles.second}>Churchill-laan 16 II, 1052 CD, Amsterdam</p></Text>
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
            </div>
            <div className={styles.officeFooter}>
                <div className={styles.block}><Text yMove={15}> <p>Facebook</p></Text></div>
                <div className={styles.block}><Text yMove={15}><p>Instagram</p></Text></div>
                <div className={styles.block}><Text yMove={15}><p>GitHub</p></Text></div>
                <div className={styles.block}><Text yMove={15}><p>Behance</p></Text></div>
                <div className={styles.block}><Text yMove={15}><p>Pinterest</p></Text></div>
                <div className={styles.block}><Text yMove={15}><p>Twitter</p></Text></div>
                <div className={styles.block}><Text yMove={15}><p>Dribbble</p></Text></div>
            </div>
        </div>
    );
}