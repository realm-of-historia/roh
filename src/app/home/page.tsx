"use client"

import React from 'react'
import Explorer from '../../views/HomePage/screens/Explorer/Explorer'
import Carahunge from '../../views/HomePage/screens/Carahunge/Carahunge'
import Lobby from '../../views/HomePage/screens/Lobby/Lobby'
import Start from '../../views/HomePage/screens/Start/Start'
import Ancient from '@/components/Ancient/Ancient'
import Comments from '../../views/HomePage/screens/Comments/Comments'
import Bundles from '../../views/HomePage/screens/Bundles/Bundles'
import Posts from '../../views/HomePage/screens/Posts/Posts'
import Videos from '../../views/HomePage/screens/Videos/Videos'
import Panegliph from '@/components/Panegliph/Panegliph'
import Marketplace from '../../views/HomePage/screens/Marketplace/Marketplace'
import Digest from '@/components/Digest/Digest'
import OurVision from '../../views/HomePage/screens/OurVision/OurVision'
import Header from '@/components/Header/Header'


export default function HomePage() {

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
      <Header></Header>
      <Explorer></Explorer>
      <Carahunge></Carahunge>
      <Lobby></Lobby>
      <Start></Start>
      <Ancient></Ancient>
      <Comments></Comments>
      <Bundles></Bundles>
      <Posts></Posts>
      <Videos></Videos>
      <OurVision secondText={firstBlock[3]} list={firstBlock[2]} leftSide={firstBlock[0]} text={firstBlock[1]}></OurVision>
      <Panegliph isFirst={false}></Panegliph>
      <OurVision secondText={secondBlock[3]} list={secondBlock[2]} leftSide={secondBlock[0]} text={secondBlock[1]}></OurVision>
      <Marketplace></Marketplace>
      <Digest></Digest>
    </div>
  )
}
