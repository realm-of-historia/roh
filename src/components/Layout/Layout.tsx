import React from "react";
import Header from "../Header/Header";
import Digest from "../Digest/Digest";
import { useApiFetch } from "@/composable/useApiFetch";

export default async function Layout({children}: {children: any}) {
    const dataHeader = await useApiFetch('api/header?populate=*')
    const dataDigest = await useApiFetch('api/footer?populate[socialNetwork][populate]=*')
    return(
        <div>
            {/* <Header data={dataHeader.data.attributes.link}/> */}
            {children}
            {/* <Digest data={dataDigest.data.attributes}></Digest> */}
        </div>
    )
}