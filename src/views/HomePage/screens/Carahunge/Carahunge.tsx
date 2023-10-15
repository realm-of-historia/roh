import React from 'react'
import styles from './Carahunge.module.scss'
import Column from './Column/Column'
import Avatar from '@/components/Header/Avatar/Avatar'
import Text from '@/components/Text/Text'
import Divider from '@/components/Divider/Divider'
export interface StandardComponentProps {
    data?: any
  }
const Carahunge = ({data} : StandardComponentProps) => {
    console.log(data)
    const column = [
        '1507.io',
        [ `The CarahungeX is a collection of 2,500 unique NFTs on the Polygon blockchain, unlocking heritage through art and technology.`,
        `At the intersection of ancient history and cutting-edge technology, our project aims to not only create a unique NFT collection inspired by the Carahunge historical site, but also to foster a deeper appreciation for our shared cultural heritage.`,
        `Our vision is to leverage the power of NFTs and blockchain technology to conserve, promote, and celebrate the rich cultural significance of the Carahunge historical site. We believe in the transformative potential of digital art and technology as tools for cultural preservation and education. Our aspiration is to create a vibrant, global community of art enthusiasts, history lovers, and NFT collectors who share our passion for safeguarding our shared cultural heritage.`,],
        'View on polygoscan',
        'globe'
    ]

    console.log(column[3])

  return (
    <div className={styles.carahunge}>
        <Divider position={"top right"}/>
        {/* <div className={styles.divider}></div> */}
        <div className={styles.left}>
            <Text>
                <p>
                    {data.title}
                </p>
            </Text>
            <Text>
                <p>    
                    {data.date}
                </p>
            </Text>
        </div>
        <Column description={data.description} link={data.link} icon={'globe'}></Column>
    </div>
  )
}

export default Carahunge