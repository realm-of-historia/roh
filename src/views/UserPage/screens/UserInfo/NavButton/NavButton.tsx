import React from 'react'
import styles from './NavButton.module.scss'
import Text from '@/components/Text/Text'

export default function NavButton({text}: {text: string}) {
    return(
        <button className={styles.navButton}>
            <div className={styles.dividerLeft}></div>
            <div className={styles.dividerRight}></div>
            <Text>
                <p>
                    {text}
                </p>
            </Text>
        </button>
    )
}