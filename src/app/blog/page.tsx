import React from 'react'
import Start from '../../views/HomePage/screens/Start/Start'
import Comments from '../../views/HomePage/screens/Comments/Comments'
import Posts from '../../views/HomePage/screens/Posts/Posts'
import { useApiFetch } from '@/composable/useApiFetch'
import { useSectionData } from '@/composable/useSectionData'
import HashAnchor from '@/components/HashAnchor/HashAnchor'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import HeritageDefault from '@/views/HomePage/screens/Heritage/HeritageDefault'

export default async function BlogPage() { 
    const data = await useApiFetch('api/blog-page?populate[video][populate]=*&populate[articles][populate]=*&populate[articlesPopular][populate]=*&populate[posterVideo][populate]=*')
    const dataStart = useSectionData(data, 'video')
    const dataStartPoster = useSectionData(data, 'posterVideo')
    const dataStartArticles = useSectionData(data, 'articles')
    const articlesPopular = useSectionData(data, 'articlesPopular')



    const comments = [[], [], [], []]

    const postsData = (comments.map(
        (item: any, index: number) => ({
            slug: `article-post-${index}`
        })
    ))

    return (
        <div>
            <HashAnchor />
            <WrapperTexture>
                <Start data={dataStart.data.attributes.url} articles={dataStartArticles} poster={dataStartPoster && dataStartPoster.data.attributes.url}></Start>
            </WrapperTexture>
            <WrapperTexture>
            <Comments data={articlesPopular} />
            </WrapperTexture>
            <Posts />
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
        </div>

    )
}