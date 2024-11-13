
import React from 'react'
import Explorer from './screens/Explorer/Explorer'
import Carahunge from './screens/Carahunge/Carahunge'
import Start from './screens/Start/Start'
import Comments from './screens/Comments/Comments'
import Posts from './screens/Posts/Posts'
import { useSectionData } from '../../composable/useSectionData.js'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import Heritage from './screens/Heritage/Heritage'
import AboutTheProject from './screens/AboutTheProject/AboutTheProject'
import RunningLine from '@/components/RunningLine/RunningLine'
import CollectionOfWorks from './screens/CollectionOfWorks/CollectionOfWorks'
import MapHome from './screens/MapHome/MapHome'
import HeritageDefault from './screens/Heritage/HeritageDefault'
export interface StandardComponentProps {
  data?: any
}

export default function HomeView({ data }: StandardComponentProps) {
  const dataExplorer = useSectionData(data, 'swiperTop')
  const dataCarahunge = useSectionData(data, 'article')
  const dataBundlesRibbon = useSectionData(data, 'ribbon')
  const dataPosts = useSectionData(data, 'lastPost')
  const dataStartVideo = useSectionData(data, 'videoArticles')
  const videoArticlesPoster = useSectionData(data, 'videoArticlesPoster')
  const articles = useSectionData(data, 'articles')
  const article_populars = useSectionData(data, 'article_populars')
  const dataHeritage = useSectionData(data, 'selfSustainableHeritage')
  const instagramPost = useSectionData(data, 'instagramPost')
  const map = useSectionData(data, 'map')
  const mapPoster = useSectionData(data, 'mapPoster')
  const ribbon2 = useSectionData(data, 'ribbon2')

  return (
    <div>
          <Explorer data={dataExplorer} />
        <WrapperTexture>
          <Heritage data={dataHeritage} />
        </WrapperTexture>
        <WrapperTexture>
          <Carahunge data={dataCarahunge} />
        </WrapperTexture>
        <WrapperTexture>
          <AboutTheProject />
        </WrapperTexture>
        <WrapperTexture>
          <RunningLine image={dataBundlesRibbon?.data.attributes.url}></RunningLine>
        </WrapperTexture>
        <WrapperTexture>
          <CollectionOfWorks />
        </WrapperTexture>
        <WrapperTexture>
          <Start data={dataStartVideo?.data.attributes.url} articles={articles} poster={videoArticlesPoster?.data.attributes.url}></Start>
        </WrapperTexture>
        <WrapperTexture>
          <Comments data={article_populars}></Comments>
        </WrapperTexture>
        <WrapperTexture>
          <Posts data={dataPosts} img={instagramPost} />
        </WrapperTexture>
        <WrapperTexture>
          <RunningLine image={ribbon2?.data.attributes.url}></RunningLine>
        </WrapperTexture>
        <WrapperTexture>
          <MapHome data={map} poster={mapPoster?.data.attributes.url}/>
        </WrapperTexture>
        <WrapperTexture>
          <HeritageDefault />
        </WrapperTexture>
    </div>
  )
}
