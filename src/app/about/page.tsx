import React from 'react'
import About from '@/views/AboutPage/About'
import { useApiFetch } from '@/composable/useApiFetch'

export default async function AboutPage() {
    const data = await useApiFetch('api/about-us-page?populate[aboutUsImg][populate]=*&populate[aboutUsDescription][populate]=*&populate[img][populate]=*&populate[Disclaimer][populate]=*&populate[MarcusLevy][populate]=*&populate[swiperAboutUs][populate]=*&populate[imgMobile][populate]=*&populate[poster][populate]=*&populate[posterMobile][populate]=*')
    return(
        <About data={data} />
    )
}