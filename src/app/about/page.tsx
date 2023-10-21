import React from 'react'
import About from '@/views/AboutPage/About'
import { useApiFetch } from '@/composable/useApiFetch'

export default async function AboutPage() {
    const data = await useApiFetch('api/about-us-page?populate[articles][populate]=*&populate[aboutUsImg][populate]=*&populate[aboutUsDescription][populate]=*&populate[img][populate]=*&populate[Disclaimer][populate]=*&populate[activity][populate]=*&populate[MarcusLevy][populate]=*&populate[ribbon][populate]=*&populate[ourGreatTeam][populate]=*&populate[swiperAboutUs][populate]=*')
    return(
        <About data={data} />
    )
}