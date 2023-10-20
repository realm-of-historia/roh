// "use client"

import React from 'react'
import Header from '@/components/Header/Header'
import GetStarted from '@/views/ArticlePage/screens/GetStarted/GetStarted'
import Posts from '@/views/HomePage/screens/Posts/Posts'
import Comments from '@/views/HomePage/screens/Comments/Comments'
import Bundles from '@/views/HomePage/screens/Bundles/Bundles'
import Digest from '@/components/Digest/Digest'
import { useApiFetch } from '@/composable/useApiFetch'
export interface StandardComponentProps {
    slug?: string,
    params?: any
}
export default async function ArticlePage(slug :StandardComponentProps) {
    console.log( slug.params.slug)
    const data = await useApiFetch('api/blog-article?populate=*')
    const dataArticle = await useApiFetch(`api/articles?filters[uid][$eq]=${slug.params.slug}`)

    console.log(dataArticle)
    return(
        <div>
            <GetStarted></GetStarted>
            <Comments></Comments>
            <Bundles></Bundles>
        </div>
    )
}