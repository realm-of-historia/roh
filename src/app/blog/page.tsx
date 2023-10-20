// "use client"

import React from 'react'
import Start from '../../views/HomePage/screens/Start/Start'
import Ancient from '@/components/Ancient/Ancient'
import Comments from '../../views/HomePage/screens/Comments/Comments'
import Bundles from '../../views/HomePage/screens/Bundles/Bundles'
import Posts from '../../views/HomePage/screens/Posts/Posts'
import Videos from '../../views/HomePage/screens/Videos/Videos'
import Digest from '@/components/Digest/Digest'
import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import { useApiFetch } from '@/composable/useApiFetch'
import { useSectionData } from '@/composable/useSectionData'

export default async function BlogPage() {
    const data = await useApiFetch('api/blog-page?populate[video][populate]=*&populate[cardBundles][populate]=*&populate[collectionOfPictures][populate]=*&populate[ribbon][populate]=*&populate[instagramPostText][populate]=*&populate[articles][populate]=*')
    const dataStart = useSectionData(data, 'video')
    const dataAncient = useSectionData(data, 'ancientText')
    const dataBundlesRibbon = useSectionData(data, 'ribbon')
    const dataBundles = useSectionData(data, 'cardBundles')
    const dataBundlesText = useSectionData(data, 'offersText')
    const dataBundlesHref = useSectionData(data, 'offersHref')
    const dataPosts = useSectionData(data, 'instagramPostText')
    const dataVideos = useSectionData(data, 'collectionOfPictures')
    const dataStartArticles = useSectionData(data, 'articles')


    const comments = [[], [], [], []]

    const postsData = (comments.map(
        (item: any, index: number) => ({
            slug: `article-post-${index}`
        })
    ))

    return (
        // <Layout>
        <div>
            {/* <Header></Header> */}
            <Start data={dataStart.data.attributes.url} articles={dataStartArticles}></Start>
            <Ancient data={dataAncient}></Ancient>
            <Comments></Comments>
            <Bundles ribbon={dataBundlesRibbon} data={dataBundles} text={dataBundlesText} href={dataBundlesHref}></Bundles>
            <Posts data={dataPosts}></Posts>
            <Videos data={dataVideos}></Videos>
            {/* <Digest></Digest> */}
        </div>
        // </Layout>

    )
}