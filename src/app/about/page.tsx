"use client"

import React from 'react'
import Header from '@/components/Header/Header'
import GetStarted from '@/views/ArticlePage/screens/GetStarted/GetStarted'
import Posts from '@/views/HomePage/screens/Posts/Posts'
import Comments from '@/views/HomePage/screens/Comments/Comments'
import Bundles from '@/views/HomePage/screens/Bundles/Bundles'
import Digest from '@/components/Digest/Digest'
import AboutUs from '@/views/AboutPage/screens/AboutUs/AboutUs'
import RunningLine from '@/components/RunningLine/RunningLine'
import Faces from '@/views/AboutPage/screens/AboutUs/Faces/Faces'
import GreatTeam from '@/views/AboutPage/screens/AboutUs/GreatTeam/GreatTeam'

export default function AboutPage() {
    return(
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <RunningLine text='PUBLICATIONS'></RunningLine>
            <Comments></Comments>
            <GreatTeam></GreatTeam>
            <Faces></Faces>
            <Digest></Digest>
        </div>
    )
}