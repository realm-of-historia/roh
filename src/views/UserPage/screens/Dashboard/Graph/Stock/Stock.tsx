import React from "react";
import styles from './Stock.module.scss'
import Icon from "@/components/UI/Icon/Icon";

export default function Stock({isDown, amount, month, percentage}: {isDown: boolean, amount: string, month: string, percentage: number}) {

    return (
        <div className={styles.stock}>
            <div className={styles.top}>
                <p className={styles.amount}>${amount}</p>
                <div className={styles.percentage}>
                    <p>
                        {percentage}%
                    </p>
                    {isDown ? <Icon label='arrow-up'></Icon> : <Icon label='arrow-down'></Icon>}
                </div>
            </div>
            <p className={styles.month}>transactions in {month}</p>
        </div>
    )
}