import React from 'react'
import styles from './AboutUs.module.scss'
import Text from '@/components/Text/Text'
import Statistic from './Statistic/Statistic'
import Divider from '@/components/Divider/Divider'
import ImageMy from '@/components/Image/ImageMy'

export interface StandardComponentProps {
  data?: any
}
const AboutUs = ({data} : StandardComponentProps) => {
  return (
    <div className={styles.about}>
      <div className={styles.first}>
        <Divider position={'top left'}></Divider>
        <div className={styles.left}>
          {/* <img src='Graphic.png' alt='' width={488} height={540}/> */}
          <ImageMy src={data?.dataAboutUsImg.data.attributes.url} alt='' width={488} height={540}/>
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
        <ImageMy src={data?.dataaboutUsimg2.data.attributes.url} alt='' width={488} height={540}/>
      </div>
      <div className={styles.third}>
        <div className={styles.disclaimer}>
          <Text>
            <p>
              {data?.dataaboutUsDisclaimer.name}
            </p>
          </Text>
          <Divider position={'top right'}></Divider>
          <Text>
            <p>
            {data?.dataaboutUsDisclaimer.description}
            </p>
          </Text>
        </div>
        <div className={styles.statistics}>
          {
            data?.dataaboutUsactivity.map((_ : any, i : number) => (
              <Statistic title={_.title} text={_.meaning}></Statistic>
            ))
          }
          {/* <Statistic title='700+' text='BUSINESSES'></Statistic>
          <Statistic title='80k+' text='Quick Reports'></Statistic>
          <Statistic title='35M+' text='Payments'></Statistic> */}
          <Divider horizontal={true} position={'top left'}></Divider>
          <Divider horizontal={true} position={'bottom left'}></Divider>
        </div>
        <div className={styles.footer}>
          <div className={styles.container}>
            <Text>
              <p>
                {data?.dataaboutUsMarcusLevy.description}
              </p>
            </Text>
            <Divider position={'top left'}></Divider>
            <Text>
              <p>
              {data?.dataaboutUsMarcusLevy.name}
              </p>
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs