import styles from './ProfileLayout.module.scss';
import React from 'react';
import Text from '../Text/Text';

const ProfileLayout = ({children, title}: {children: any, title: string}) => {


    return (
        <div className={styles.profileLayout}>
            <div className={styles.dividerCenter}></div>
            <div className={styles.dividerBottom}></div>
            <div className={styles.left}>
                <div>
                    <p className={styles.title}>
                        {title}
                    </p>
                </div>
            </div>
            <div className={styles.right}>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout;