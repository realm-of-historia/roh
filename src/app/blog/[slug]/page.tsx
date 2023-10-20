// "use client"

import React from 'react'
import Header from '@/components/Header/Header'
import GetStarted from '@/views/ArticlePage/screens/GetStarted/GetStarted'
import Posts from '@/views/HomePage/screens/Posts/Posts'
import Comments from '@/views/HomePage/screens/Comments/Comments'
import Bundles from '@/views/HomePage/screens/Bundles/Bundles'
import Digest from '@/components/Digest/Digest'
import { useApiFetch } from '@/composable/useApiFetch'
import { useSectionData } from '@/composable/useSectionData'
export interface StandardComponentProps {
    slug?: string,
    params?: any
}
export default async function ArticlePage(slug :StandardComponentProps) {
    console.log( slug.params.slug)
    const data = await useApiFetch('api/blog-article?populate[cardBundles][populate]=*&populate[listOfCategories][populate]=*&populate[ribbon][populate]=*')
    const dataArticleLast = await useApiFetch(`api/articles?pagination[pageSize]=4&fields[0]=title&fields[1]=uid`)
    const dataArticle = await useApiFetch(`api/articles?filters[uid][$eq]=${slug.params.slug}&populate=*`)
    const cardBundlesText = useSectionData(data, 'cardBundlesText')
    const cardBundlesHref = useSectionData(data, 'cardBundlesHref')
    const cardBundles = useSectionData(data, 'cardBundles')
    const ribbon = useSectionData(data, 'ribbon')
    console.log(cardBundles)
    console.log(dataArticle)
    return(
        <div>
            <GetStarted data={data} article={dataArticle} dataArticleLast={dataArticleLast}></GetStarted>
            <Comments></Comments>
            <Bundles ribbon={ribbon} data={cardBundles} text={cardBundlesText} href={cardBundlesHref}></Bundles>
        </div>
    )
}