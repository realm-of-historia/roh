"use client"

import Image from "next/image"
import { forwardRef, useEffect, useState } from "react"

const ImageMy = forwardRef(function ImageMy({ src, width, height, alt = '', poster, priority=false }: { src: any, width?: any, height?: any, alt?: any, poster?: any, priority?: boolean }, ref: any) {
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
                    <video width={width} height={height} playsInline autoPlay muted loop poster={poster? urlposter : ''} ref={ref} >
                        <source src={url} type="video/mp4"/>
                    </video>
                    :
                    <Image loading={!width ? "lazy" : 'eager'}
                    layout={!width ?"fill" : ''}
                     ref={ref} src={url} width={width} priority={priority} height={height} alt={alt} />
            }

        </>
    )
})

export default ImageMy