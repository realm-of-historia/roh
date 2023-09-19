"use client"

import React from 'react'
import Start from '../../views/HomePage/screens/Start/Start'
import Ancient from '@/components/Ancient/Ancient'
import Comments from '../../views/HomePage/screens/Comments/Comments'
import Bundles from '../../views/HomePage/screens/Bundles/Bundles'
import Posts from '../../views/HomePage/screens/Posts/Posts'
import Videos from '../../views/HomePage/screens/Videos/Videos'
import Digest from '@/components/Digest/Digest'
import Header from '@/components/Header/Header'

export default function BlogPage() {
    return(
        <div>
            <Header></Header>
            <Start></Start>
            <Ancient></Ancient>
            <Comments></Comments>
            <Bundles></Bundles>
            <Posts></Posts>
            <Videos></Videos>
            <Digest></Digest>
        </div>
    )
}