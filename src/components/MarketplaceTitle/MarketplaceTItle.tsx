import styles from './MarketplaceTitle.module.scss';
import React from 'react';

const MarketplaceTitle = ({title} : {title : any}) => {


    return (
        <div className={styles.marketTitle}>
            {
                title &&
                title
            }
            <div className={styles.dividerBot}></div>
        </div>
    )
}

export default MarketplaceTitle;