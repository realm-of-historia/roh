"use client"

import React from 'react'
import Header from '@/components/Header/Header'
import GetStarted from '@/views/ArticlePage/screens/GetStarted/GetStarted'
import Posts from '@/views/HomePage/screens/Posts/Posts'
import Comments from '@/views/HomePage/screens/Comments/Comments'
import Bundles from '@/views/HomePage/screens/Bundles/Bundles'
import Digest from '@/components/Digest/Digest'

export default function ArticlePage() {
    return(
        <div>
            <Header></Header>
            <GetStarted></GetStarted>
            <Comments></Comments>
            <Bundles></Bundles>
            <Digest></Digest>
        </div>
    )
}