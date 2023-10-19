import React from 'react'
import About from '@/views/AboutPage/About'
import { useApiFetch } from '@/composable/useApiFetch'

export default async function AboutPage() {
    const data = await useApiFetch('api/about-us-page?populate=*')
    return(
        <About data={data} />
    )
}