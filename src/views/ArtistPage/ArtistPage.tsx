import React from "react";
import styles from './ArtistPage.module.scss'
import Text from "@/components/Text/Text";
import Creatures from "./Creatures/Creatures";


export default function Artist({name, spec, text}: {name: string | Array<string>, spec: string | Array<string>, text: string | Array<string>}){



    const artists = [
        []
    ]

    return(
        <div className={styles.artist}>
            <div className={styles.left}>
                <img src='userImage.png' width={363} height={363} alt=''/>
                <div className={styles.info}>
                    <Text>
                        <p className={styles.name}>
                            {name}
                        </p>
                    </Text>
                    <Text>
                        <p className={styles.spec}>
                            {spec}
                        </p>
                    </Text>
                    <div className={styles.container}>
                        {Array.isArray(text) ? text.map((element: any, index: number) => (
                            <Text key={index}>
                                <p className={styles.text}>
                                    {text}
                                </p>
                            </Text>
                        )) : <Text><p className={styles.text}>{text}</p></Text>}
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <Creatures></Creatures>
            </div>
        </div>
    )
}