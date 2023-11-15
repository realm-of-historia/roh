"use client"

import Image from "next/image"
import { forwardRef, useEffect, useState } from "react"

const ImageMy = forwardRef(function ImageMy({ src, width, height, alt = '', poster }: { src: any, width?: any, height?: any, alt?: any, poster?: any }, ref: any) {
    const url = 'https://api.realmofhistoria.com' + src
    const urlposter = 'https://api.realmofhistoria.com' + poster
    const [video, setVideo] = useState(true)
    useEffect(() => {
        if (!src) { return }
        let pathExamination = src.substring(src.length - 3)
        // console.log(pathExamination)
        if (pathExamination !== 'mp4') {
            setVideo(false)
        }
    }, [src])
    return (
        <>
            {
                video ?
                    <video ref={ref} muted playsInline loop autoPlay poster={poster? urlposter : ''}>
                        <source src={url} type="video/mp4"/>
                    </video>
                    :
                    <Image ref={ref} src={url} width={width} height={height} alt={alt} />
            }

        </>
    )
})

export default ImageMy