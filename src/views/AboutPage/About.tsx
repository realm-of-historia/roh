"use client"

import React from 'react'
import Header from '@/components/Header/Header'
import Comments from '@/views/HomePage/screens/Comments/Comments'
import Digest from '@/components/Digest/Digest'
import AboutUs from '@/views/AboutPage/screens/AboutUs/AboutUs'
import RunningLine from '@/components/RunningLine/RunningLine'
import Faces from '@/views/AboutPage/screens/AboutUs/Faces/Faces'
import GreatTeam from '@/views/AboutPage/screens/AboutUs/GreatTeam/GreatTeam'
import Layout from '@/components/Layout/Layout'

export default function About() {
    return(
        <div>
            <Layout>
                <AboutUs></AboutUs>
                <RunningLine text='PUBLICATIONS'></RunningLine>
                <Comments></Comments>
                <GreatTeam></GreatTeam>
                <Faces></Faces>
            </Layout>
        </div>
    )
}