import React from 'react'
import styles from './AboutUs.module.scss'
import Text from '@/components/Text/Text'
import Statistic from './Statistic/Statistic'


const AboutUs = () => {


  return (
    <div className={styles.about}>
      <div className={styles.first}>
        <div className={styles.divider}></div>
        <div className={styles.left}>
          <img src='Graphic.png' alt='' width={488} height={540}/>
        </div>
        <div className={styles.right}>
          <Text>
            <p>ABOUT US</p>
          </Text>
          <Text>
            <p>Within the last 10 years, we have sold over 100,000 admin theme copies that have been successfully deployed by small businesses to global enterprises.</p>
          </Text>
        </div>
      </div>
      <div className={styles.dividerBottom}></div>
      <div className={styles.second}>
        <img src='ancectors.png' alt='' width={1920} height={480}/>
      </div>
      <div className={styles.third}>
        <div className={styles.disclaimer}>
          <Text>
            <p>
              Disclaimer
            </p>
          </Text>
          <div className={styles.leftDivider}></div>
          <Text>
            <p>
              First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting «Publish», you might spend several days or maybe even a week “writing” a blog post, but it’s important to spend those vital hours planning your post and even thinking about Your Post (yes, thinking counts as working if you’re a blogger) before you actually write it.
            </p>
          </Text>
        </div>
        <div className={styles.statistics}>
          <Statistic title='700+' text='BUSINESSES'></Statistic>
          <Statistic title='80k+' text='Quick Reports'></Statistic>
          <Statistic title='35M+' text='Payments'></Statistic>
          <div className={styles.dividerTop}></div>
          <div className={styles.dividerBottom}></div>
        </div>
        <div className={styles.footer}>
          <div className={styles.container}>
            <Text>
              <p>
                «When you care about your topic, you’ll write about it in a more powerful, emotionally expressive way»
              </p>
            </Text>
            <div className={styles.leftDivider}></div>
            <Text>
              <p>
                Marcus Levy, KeenThemes CEO
              </p>
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs