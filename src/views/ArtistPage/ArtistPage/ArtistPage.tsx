"use client"

import React, { useEffect, useMemo, useState } from "react";
import styles from './ArtistPage.module.scss'
import Text from "@/components/Text/Text";
import Creatures from "../Creatures/Creatures";
import ImageMy from "@/components/Image/ImageMy";
import Divider from "@/components/Divider/Divider";
import { useWindowSize } from 'rooks';


export default function Artist({ name, spec, text, item, avatar }: { name: string | Array<string>, spec: string | Array<string>, text: string | Array<string>, item: any | Array<string>, avatar?: any }) {
    const [topRight, setTopRight]: any = useState([])
    const [bottomRight, setBottomRight]: any = useState([])
    let leftInfoArray: any = [];
    let rightInfoArray: any = [];
    const { innerWidth }: number | any = useWindowSize();

    useMemo(() => {
        if (!item) { return }
        for (let i = 0; i < item.length; i++) {
            if (i % 2) {
                rightInfoArray.push(item[i]);
            } else {
                leftInfoArray.push(item[i]);
            }
            setTopRight(leftInfoArray)
            setBottomRight(rightInfoArray)
        }
    }, [item])
    return (
        <div className={styles.artist}>
            <div className={styles.left}>
                <div className={styles.dividerLeft}></div>
                {/* <img src='userImage.png' width={363} height={363} alt=''/> */}
                <ImageMy src={avatar} width={363} height={363} alt='' />
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
                        <Text >
                            <p className={styles.text}>
                                {text}
                            </p>
                        </Text>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <Divider position={"top right"} horizontal={true} noAnim={true} />
                {
                    innerWidth <= 1440 ?
                        <Creatures items={item}></Creatures>
                        :
                        <>
                            <Creatures items={topRight}></Creatures>
                            <Creatures items={bottomRight}></Creatures>
                        </>
                }

            </div>
        </div>
    )
}