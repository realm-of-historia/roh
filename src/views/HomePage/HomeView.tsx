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
import {useSectionData} from '../../composable/useSectionData.js'
export interface StandardComponentProps {
  data?: any
}

export default function HomeView({data} : StandardComponentProps) {
  const dataExplorer = useSectionData(data, 'swiperTop')
  const dataCarahunge = useSectionData(data, 'article')
  const dataLobby = useSectionData(data, 'lobby')
  const dataAncient = useSectionData(data, 'historyWorld')
  const dataBundles = useSectionData(data, 'cardBundles')
  const dataBundlesText = useSectionData(data, 'viewAllOffers')
  const dataBundlesHref = useSectionData(data, 'viewAllOffershref')
  const dataBundlesRibbon = useSectionData(data, 'ribbon')
  const dataPosts = useSectionData(data, 'lastPost')


  console.log(dataBundlesRibbon)
  const firstBlock = [
    'ROH',
    'Realm of Historia (RoH) is a unique venture aimed at preserving and immortalizing global cultural heritage through the innovative use of blockchain and metaverse technologies. The project will deliver cultural education, immersive experiences, and profitable NFT opportunities while contributing positively to historical preservation through generous donations and charitable opportunities.',
    ['Expansion of RoH Metaverse with additional global heritage sites' , 'Each site accurately represented in a digital environment', 'Offer a unique and immersive experience for users to interact with history'],
    'Realm of Historia (RoH) is a unique venture aimed at preserving and immortalizing global cultural heritage through the innovative use of blockchain and metaverse technologies. The project will deliver cultural education, immersive experiences, and profitable NFT opportunities while contributing positively to historical preservation through generous donations and charitable opportunities.',
  ]

  const secondBlock = [
    'STAGe 1',
    'Our vision for Stage II is to expand the Realm of Historia (RoH) Metaverse to include global heritage sites, offering a unique and immersive experience for users. Here are the key aspects of this stage.',
  ['Expansion of RoH Metaverse with additional global heritage sites' , 'Each site accurately represented in a digital environment', 'Offer a unique and immersive experience for users to interact with history'],
  'Realm of Historia (RoH) is a unique venture aimed at preserving and immortalizing global cultural heritage through the innovative use of blockchain and metaverse technologies. The project will deliver cultural education, immersive experiences, and profitable NFT opportunities while contributing positively to historical preservation through generous donations and charitable opportunities.',
  ]

  return (
    <div>
        <Layout>
            <Explorer data={dataExplorer} />
            <Carahunge data={dataCarahunge} />
            <NativeUnderpin>
                <WrapperParallax>
                  <Lobby data={dataLobby} isCircle={true} />
                </WrapperParallax>
            </NativeUnderpin>
            <Start></Start>
            <Ancient data={dataAncient} />
            <Comments></Comments>
            <NativeUnderpin>
                <Bundles ribbon={dataBundlesRibbon} data={dataBundles} text={dataBundlesText} href={dataBundlesHref}></Bundles>
            </NativeUnderpin>
            <Posts data={dataPosts}/>
            <Videos></Videos>
            <OurVision secondText={firstBlock[3]} list={firstBlock[2]} leftSide={firstBlock[0]} text={firstBlock[1]}></OurVision>
            <Panegliph isFirst={false}></Panegliph>
            <OurVision secondText={secondBlock[3]} list={secondBlock[2]} leftSide={secondBlock[0]} text={secondBlock[1]}></OurVision>
            <Marketplace></Marketplace>
        </Layout>
    </div>
  )
}
