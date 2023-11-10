"use client";

import { useAuthStore } from "@/store/store";
import { useEffect } from "react";
export interface StandardComponentProps {
    dataAbout?: any,
    datacarahunges?: any,
    datajoinUses?: any,
}
const WrapperDefoultData = ({ dataAbout, datacarahunges, datajoinUses }: StandardComponentProps) => {
   
    const setDataAbout = (_: any) => {
        useAuthStore.setState({ aboutTheProject: _ })
    }
    const setDataCarahunges = (_: any) => {
        useAuthStore.setState({ carahunges: _ })
    }
    const setDataJoinUses = (_: any) => {
        useAuthStore.setState({ joinUses: _ })
    }
    useEffect(() => {
        if (!dataAbout) {
            return
        } else {
            setDataAbout(dataAbout?.data[0].attributes.aboutTheProject)
        }
    }, [dataAbout])

    useEffect(() => {
        if (!datacarahunges) {
            return
        } else {
            setDataCarahunges(datacarahunges?.data[0].attributes)
        }
    }, [datacarahunges])
    useEffect(() => {
        if (!datajoinUses) {
            return
        } else {
            setDataJoinUses(datajoinUses?.data[0].attributes.joinUs)
        }
    }, [datajoinUses])
    return(
        <></>
    )
}

export default WrapperDefoultData