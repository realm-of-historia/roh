"use client"

import React from 'react'
import styles from './AboutUs.module.scss'
import Text from '@/components/Text/Text'
import Statistic from './Statistic/Statistic'
import Divider from '@/components/Divider/Divider'
import ImageMy from '@/components/Image/ImageMy'
import { useWindowSize } from 'rooks';

export interface StandardComponentProps {
  data?: any
}
const AboutUs = ({data} : StandardComponentProps) => {
  const { innerWidth }: number | any = useWindowSize();

  return (
    <div className={styles.about}>
      <div className={styles.first}>
        <Divider position={'top left'} noAnim={true}></Divider>
        <div className={styles.left}>
          {/* <img src='Graphic.png' alt='' width={488} height={540}/> */}
          <ImageMy src={ data?.dataAboutUsImg.data.attributes.url} alt='' width={488} height={540}/>
        </div>
        <div className={styles.right}>
          <Text>
            <p>{data?.dataaboutUsDescription.name}</p>
          </Text>
          <Text>
            <p>{data?.dataaboutUsDescription.description}</p>
          </Text>
        </div>
      </div>
      <div className={styles.dividerBottom}></div>
      <div className={styles.second}>
        {/* <img src='ancectors.png' alt='' width={1920} height={480}/> */}
        <ImageMy src={innerWidth <= 576 ? data?.dataaboutUsimgMobile?.data.attributes.url : data?.dataaboutUsimg2?.data.attributes.url} 
        alt='' 
        width={488} 
        height={540} 
        poster={innerWidth <= 576 ? data?.posterMobile?.data?.attributes.url : data?.poster?.data?.attributes.url}
        />
      </div>
      <div className={styles.third}>
        <div className={styles.disclaimer}>
          <Text>
            <p>
              {data?.dataaboutUsDisclaimer.name}
            </p>
          </Text>
          <Divider position={'top right'} noAnim={true}></Divider>
          <Text>
            <p>
            {data?.dataaboutUsDisclaimer.description}
            </p>
          </Text>
        </div>
        <div className={styles.statistics}>
          <Divider horizontal={true} position={'top left'} noAnim={true}></Divider>
          <Divider horizontal={true} position={'bottom left'} noAnim={true}></Divider>
          {/* {
            data?.dataaboutUsactivity.map((_ : any, i : number) => (
              <Statistic key={i + 434} title={_.title} text={_.meaning}></Statistic>
            ))
          } */}
          {/* <Statistic title='700+' text='BUSINESSES'></Statistic>
          <Statistic title='80k+' text='Quick Reports'></Statistic>
          <Statistic title='35M+' text='Payments'></Statistic> */}
          
        </div>
        {/* <div className={styles.footer}>
          <div className={styles.container}>
            <Text>
              <p>
                {data?.dataaboutUsMarcusLevy.description}
              </p>
            </Text>
            <Divider position={'top left'} noAnim={true}></Divider>
            <Text>
              <p>
              {data?.dataaboutUsMarcusLevy.name}
              </p>
            </Text>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default AboutUs