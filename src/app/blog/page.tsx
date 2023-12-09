// "use client"

import React from 'react'
import Start from '../../views/HomePage/screens/Start/Start'
import Comments from '../../views/HomePage/screens/Comments/Comments'
import Posts from '../../views/HomePage/screens/Posts/Posts'
import Digest from '@/components/Digest/Digest'
import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import { useApiFetch } from '@/composable/useApiFetch'
import { useSectionData } from '@/composable/useSectionData'
import HashAnchor from '@/components/HashAnchor/HashAnchor'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import HeritageDefault from '@/views/HomePage/screens/Heritage/HeritageDefault'

export default async function BlogPage() {
    const data = await useApiFetch('api/blog-page?populate[video][populate]=*&populate[cardBundles][populate]=*&populate[collectionOfPictures][populate]=*&populate[ribbon][populate]=*&populate[instagramPostText][populate]=*&populate[articles][populate]=*&populate[articlesPopular][populate]=*&populate[instagramImg][populate]=*')
    const dataStart = useSectionData(data, 'video')
    const dataPosts = useSectionData(data, 'instagramPostText')
    const dataStartArticles = useSectionData(data, 'articles')
    const articlesPopular = useSectionData(data, 'articlesPopular')
    const instagramImg = useSectionData(data, 'instagramImg')



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
            <HashAnchor />
            <WrapperTexture>
                <Start data={dataStart.data.attributes.url} articles={dataStartArticles}></Start>
            </WrapperTexture>
            <WrapperTexture>
            <Comments data={articlesPopular} />
            </WrapperTexture>
            <Posts data={dataPosts} img={instagramImg}></Posts>
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
            {/* <Digest></Digest> */}
        </div>
        // </Layout>

    )
}