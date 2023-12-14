
import React from 'react'
import AboutUs from '@/views/AboutPage/screens/AboutUs/AboutUs'
import RunningLine from '@/components/RunningLine/RunningLine'
import Faces from '@/views/AboutPage/screens/AboutUs/Faces/Faces'
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
    const dataAboutUs = {
        dataAboutUsImg,
        dataaboutUsDescription,
        dataaboutUsimg2,
        dataaboutUsDisclaimer,
        dataaboutUsactivity,
        dataaboutUsMarcusLevy,
        dataaboutUsimgMobile
    }
    const dataFaces = useSectionData(data, 'swiperAboutUs')

    return (
        <div>
            <HashAnchor />
            <WrapperTexture>
                <AboutUs data={dataAboutUs} />
            </WrapperTexture>
            <WrapperTexture>
                <Faces data={dataFaces} />
            </WrapperTexture>
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
        </div>
    )
}