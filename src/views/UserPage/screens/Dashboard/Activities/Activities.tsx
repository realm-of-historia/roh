import React from "react";
import styles from './Activities.module.scss'
import Latest from "./Latest/Latest";
import Staking from "./Staking/Staking";

export default function Activities() {

    return(
        <div className={styles.activities}>
            <Latest></Latest>
            <Staking></Staking>
        </div>
    )
}