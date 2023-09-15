import React from 'react'
import styles from './Bundles.module.scss'
import RunningLine from '@/components/RunningLine/RunningLine'
import Bundle from '@/components/Bundle/Bundle'

const Bundles = () => {

    const bundleInfo = [
        '25 Products Mega Bundle with 50% off discount',
        '$ 28.00',
        'rockHoleNFT'
    ]

    const bundleInfoSecond = [
        '25 Products Mega Bundle with 50% off discount',
        '$ 28.00',
        'chestNFT'
    ]

    const bundleInfoThird = [
        '25 Products Mega Bundle with 50% off discount',
        '$ 28.00',
        'rockNFT'
    ]

  return (
    <div className={styles.bundles}>
        <RunningLine text='HOTTeST BUNDLeS'></RunningLine>
        <div className={styles.bundlesContainer}>
            <Bundle title={bundleInfo[0]} price={bundleInfo[1]} image={bundleInfo[2]}></Bundle>
            <Bundle title={bundleInfoSecond[0]} price={bundleInfoSecond[1]} image={bundleInfoSecond[2]}></Bundle>
            <Bundle title={bundleInfoThird[0]} price={bundleInfoThird[1]} image={bundleInfoThird[2]}></Bundle>
        </div>
    </div>
  )
}

export default Bundles