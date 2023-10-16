"use client"

import Image from "next/image"
import { forwardRef } from "react"

const ImageMy = forwardRef(function ImageMy({src, width, height, alt=''}: {src: any, width: any, height: any, alt: any},ref: any){
    const url = 'https://api.realmofhistoria.com' + src
    return (
        <>
            <img ref={ref} src={url} width={width} height={height} alt={alt}/>
        </>
    )
})

export default ImageMy