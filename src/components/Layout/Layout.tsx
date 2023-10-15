import React from "react";
import Header from "../Header/Header";
import Digest from "../Digest/Digest";

export default function Layout({children}: {children: any}) {
    
    return(
        <div>
            <Header></Header>
            {children}
            <Digest></Digest>
        </div>
    )
}