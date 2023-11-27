// "use client"

import React from 'react'
import Header from '@/components/Header/Header'
import Comments from '@/views/HomePage/screens/Comments/Comments'
import Digest from '@/components/Digest/Digest'
import AboutUs from '@/views/AboutPage/screens/AboutUs/AboutUs'
import RunningLine from '@/components/RunningLine/RunningLine'
import Faces from '@/views/AboutPage/screens/AboutUs/Faces/Faces'
import GreatTeam from '@/views/AboutPage/screens/AboutUs/GreatTeam/GreatTeam'
import Layout from '@/components/Layout/Layout'
import { useSectionData } from '@/composable/useSectionData'
import HashAnchor from '@/components/HashAnchor/HashAnchor'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import HeritageDefault from '../HomePage/screens/Heritage/HeritageDefault'
export interface StandardComponentProps {
    data?: any
}
export default function About({ data }: StandardComponentProps) {
    const dataAboutUsImg = useSectionData(data, 'aboutUsImg')
    const dataaboutUsDescription = useSectionData(data, 'aboutUsDescription')
    const dataaboutUsimg2 = useSectionData(data, 'img')
    const dataaboutUsimgMobile = useSectionData(data, 'imgMobile')
    const dataaboutUsDisclaimer = useSectionData(data, 'Disclaimer')
    const dataaboutUsactivity = useSectionData(data, 'activity')
    const dataaboutUsMarcusLevy = useSectionData(data, 'MarcusLevy')
    const articles = useSectionData(data, 'articles')
    const dataAboutUs = {
        dataAboutUsImg,
        dataaboutUsDescription,
        dataaboutUsimg2,
        dataaboutUsDisclaimer,
        dataaboutUsactivity,
        dataaboutUsMarcusLevy,
        dataaboutUsimgMobile
    }
    const dataRunningLine = useSectionData(data, 'ribbon')
    const dataGreatTeam = useSectionData(data, 'ourGreatTeam')
    const dataFaces = useSectionData(data, 'swiperAboutUs')

    return (
        <div>
            {/* <Layout> */}
            <HashAnchor />
            <WrapperTexture>
                <AboutUs data={dataAboutUs} />
            </WrapperTexture>

            {/* <RunningLine image={dataRunningLine.data.attributes.url}></RunningLine> */}
            {/* <Comments data={articles} /> */}
            {/* <GreatTeam data={dataGreatTeam} /> */}
            <WrapperTexture>
                <Faces data={dataFaces} />
            </WrapperTexture>
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
            {/* </Layout> */}
        </div>
    )
}