import React from 'react'
import styles from './HomePage.module.scss'
import Explorer from './screens/Explorer/Explorer'
import Carahunge from './screens/Carahunge/Carahunge'
import Lobby from './screens/Lobby/Lobby'
import Start from './screens/Start/Start'
import Ancient from '@/components/Ancient/Ancient'
import Comments from './screens/Comments/Comments'
import Bundles from './screens/Bundles/Bundles'
import Posts from './screens/Posts/Posts'
import Videos from './screens/Videos/Videos'
import Panegliph from '@/components/Panegliph/Panegliph'
import Marketplace from './screens/Marketplace/Marketplace'


const HomePage = () => {


  return (
    <div className={styles.home}>
      <Explorer></Explorer>
      <Carahunge></Carahunge>
      <Lobby></Lobby>
      <Start></Start>
      <Ancient></Ancient>
      <Comments></Comments>
      <Bundles></Bundles>
      <Posts></Posts>
      <Videos></Videos>
      <Panegliph isFirst={false}></Panegliph>
      <Marketplace></Marketplace>
    </div>
  )
}

export default HomePage