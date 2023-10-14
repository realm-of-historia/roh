import React from "react";
import styles from './Activity.module.scss'
import Icon from "@/components/UI/Icon/Icon";

export default function Activity({data}: {data: any}) {

    return(
        <div className={styles.activity}>
            {data.map((el: any, index: any) => (
                <div className={styles.section} key={index}>
                    <p>
                        {el[0]}
                    </p>
                    <p>
                        {el[1]}
                    </p>
                </div>
            ))}
            <div className={styles.link}>
                <Icon label='horizontal-arrow'></Icon>
            </div>
        </div>
    )
}