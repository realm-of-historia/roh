// "use client"

import React from 'react'
import Panegliph from '@/components/Panegliph/Panegliph'
import Explorer from './screens/Explorer/Explorer'
import Carahunge from './screens/Carahunge/Carahunge'
import Lobby from './screens/Lobby/Lobby'
import Start from './screens/Start/Start'
import Ancient from '@/components/Ancient/Ancient'
import Comments from './screens/Comments/Comments'
import Bundles from './screens/Bundles/Bundles'
import Posts from './screens/Posts/Posts'
import Videos from './screens/Videos/Videos'
import OurVision from './screens/OurVision/OurVision'
import Marketplace from './screens/Marketplace/Marketplace'
import Digest from '@/components/Digest/Digest'
import Header from '@/components/Header/Header'
import { NativeUnderpin } from '@/components/NativeUnderpin/NativeUnderpin'
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from '@/components/Layout/Layout'
import WrapperParallax from './wrapper/WrapperParallax/WrapperParallax.jsx'
import { useSectionData } from '../../composable/useSectionData.js'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import Heritage from './screens/Heritage/Heritage'
import AboutTheProject from './screens/AboutTheProject/AboutTheProject'
import RunningLine from '@/components/RunningLine/RunningLine'
import CollectionOfWorks from './screens/CollectionOfWorks/CollectionOfWorks'
import MapHome from './screens/MapHome/MapHome'
export interface StandardComponentProps {
  data?: any
}

export default function HomeView({ data }: StandardComponentProps) {
  const dataExplorer = useSectionData(data, 'swiperTop')
  const dataCarahunge = useSectionData(data, 'article')
  const dataLobby = useSectionData(data, 'lobby')
  const dataAncient = useSectionData(data, 'historyWorld')
  const dataBundles = useSectionData(data, 'cardBundles')
  const dataBundlesText = useSectionData(data, 'viewAllOffers')
  const dataBundlesHref = useSectionData(data, 'viewAllOffershref')
  const dataBundlesRibbon = useSectionData(data, 'ribbon')
  const dataPosts = useSectionData(data, 'lastPost')
  const dataVideos = useSectionData(data, 'collectionImg')
  const dataOurVision = useSectionData(data, 'descriptionROH')
  const dataOurVisionTitle = useSectionData(data, 'titleROH')
  const dataOurVision2 = useSectionData(data, 'descriptionSTAGE')
  const dataOurVisionTitle2 = useSectionData(data, 'titleSTAGE')
  const dataMarketplace = useSectionData(data, 'titleMARKETPLACE')
  const dataStartVideo = useSectionData(data, 'videoArticles')
  const articles = useSectionData(data, 'articles')
  const article_populars = useSectionData(data, 'article_populars')
  const dataHeritage = useSectionData(data, 'selfSustainableHeritage')
  const carahunge = useSectionData(data, 'carahunge')
  const instagramPost = useSectionData(data, 'instagramPost')
  const map = useSectionData(data, 'map')
  const joinUs = useSectionData(data, 'joinUs')

  const firstBlock = [
    'ROH',
    'Realm of Historia (RoH) is a unique venture aimed at preserving and immortalizing global cultural heritage through the innovative use of blockchain and metaverse technologies. The project will deliver cultural education, immersive experiences, and profitable NFT opportunities while contributing positively to historical preservation through generous donations and charitable opportunities.',
    ['Expansion of RoH Metaverse with additional global heritage sites', 'Each site accurately represented in a digital environment', 'Offer a unique and immersive experience for users to interact with history'],
    'Realm of Historia (RoH) is a unique venture aimed at preserving and immortalizing global cultural heritage through the innovative use of blockchain and metaverse technologies. The project will deliver cultural education, immersive experiences, and profitable NFT opportunities while contributing positively to historical preservation through generous donations and charitable opportunities.',
  ]

  const secondBlock = [
    'STAGe 1',
    'Our vision for Stage II is to expand the Realm of Historia (RoH) Metaverse to include global heritage sites, offering a unique and immersive experience for users. Here are the key aspects of this stage.',
    ['Expansion of RoH Metaverse with additional global heritage sites', 'Each site accurately represented in a digital environment', 'Offer a unique and immersive experience for users to interact with history'],
    'Realm of Historia (RoH) is a unique venture aimed at preserving and immortalizing global cultural heritage through the innovative use of blockchain and metaverse technologies. The project will deliver cultural education, immersive experiences, and profitable NFT opportunities while contributing positively to historical preservation through generous donations and charitable opportunities.',
  ]

  return (
    <div>
      <Layout>
          <Explorer data={dataExplorer} />
        <WrapperTexture>
          <Heritage data={dataHeritage} />
          <Carahunge data={dataCarahunge} />
          <AboutTheProject />
          {/* <NativeUnderpin>
          <WrapperParallax>
            <Lobby data={dataLobby} isCircle={true} />
          </WrapperParallax>
        </NativeUnderpin> */}
          <RunningLine image={dataBundlesRibbon?.data.attributes.url}></RunningLine>
          <CollectionOfWorks data={carahunge} />
          <Start data={dataStartVideo?.data.attributes.url} articles={articles}></Start>
          {/* <Ancient data={dataAncient} /> */}
          <Comments data={article_populars}></Comments>
          {/* <NativeUnderpin>
          <Bundles ribbon={dataBundlesRibbon} data={dataBundles} text={dataBundlesText} href={dataBundlesHref}></Bundles>
        </NativeUnderpin> */}
        </WrapperTexture>
          <Posts data={dataPosts} img={instagramPost} />
        <WrapperTexture>
          <RunningLine image={dataBundlesRibbon?.data.attributes.url}></RunningLine>
          <MapHome data={map}/>
          <Heritage data={joinUs} bg={true}/>
          {/* <Videos data={dataVideos} /> */}
          {/* <OurVision data={dataOurVision} title={dataOurVisionTitle} /> */}
          {/* <Panegliph isFirst={false}></Panegliph> */}
          {/* <OurVision data={dataOurVision2} title={dataOurVisionTitle2} /> */}
          {/* <Marketplace title={dataMarketplace} /> */}
        </WrapperTexture>
      </Layout>
    </div>
  )
}
