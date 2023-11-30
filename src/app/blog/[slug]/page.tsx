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
import HashAnchor from '@/components/HashAnchor/HashAnchor'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import HeritageDefault from '@/views/HomePage/screens/Heritage/HeritageDefault'
import style from './page.module.scss'
export interface StandardComponentProps {
    slug?: any | undefined,
    params?: any | undefined
}
export default async function ArticlePage(slug: any) {
    // console.log( slug.params.slug)
    const dataComments = await useApiFetch('api/blog-page?populate[articlesPopular][populate]=*')
    const data = await useApiFetch('api/blog-article?populate[cardBundles][populate]=*&populate[listOfCategories][populate]=*&populate[ribbon][populate]=*&populate[familiarizationTimeImg][populate]=*&populate[creationDateIcon][populate]=*')
    const dataArticleLast = await useApiFetch(`api/articles?pagination[pageSize]=4&fields[0]=title&fields[1]=uid`)
    const dataArticle = await useApiFetch(`api/articles?filters[uid][$eq]=${slug.params.slug}&populate[link][populate]=*&populate[img][populate]=*&populate[avatar][populate]=*`) 
    const cardBundlesText = useSectionData(data, 'cardBundlesText')
    const cardBundlesHref = useSectionData(data, 'cardBundlesHref')
    const cardBundles = useSectionData(data, 'cardBundles')
    const ribbon = useSectionData(data, 'ribbon')
    const articlesPopular = useSectionData(dataComments, 'articlesPopular')
    return (
        <div>
            <HashAnchor />
            <WrapperTexture>
                <GetStarted comments={articlesPopular} data={data} article={dataArticle} dataArticleLast={dataArticleLast}></GetStarted>
            </WrapperTexture>
            {/* <div className={style.wrapperComments}>
            <WrapperTexture>
                <Comments data={articlesPopular}></Comments>
            </WrapperTexture>
            </div> */}
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
            {/* <Bundles ribbon={ribbon} data={cardBundles} text={cardBundlesText} href={cardBundlesHref}></Bundles> */}
        </div>
    )
}