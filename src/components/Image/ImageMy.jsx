"use client"

import Image from "next/image"
import { forwardRef } from "react"

const ImageMy = forwardRef(function ImageMy({src, width, height, alt=''},ref){
    const url = 'https://api.realmofhistoria.com' + src
    console.log(url)
    return (
        <>
            <img ref={ref} src={url} width={width} height={height} alt={alt}/>
        </>
    )
})

export default ImageMy