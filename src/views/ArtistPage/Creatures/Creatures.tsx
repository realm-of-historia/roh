"use client"

import React from 'react'
import styles from './Creatures.module.scss'
import Bundle from '@/components/Bundle/Bundle'
import Item from './Item/Item'
import imgs from '../../../../public/showAll.svg'
import Divider from '@/components/Divider/Divider'
import { useWindowSize } from 'rooks';

const Creatures = ({ text, price, image, items }: { text?: string | Array<string>, price?: string | Array<string>, image?: string | Array<string>, items?: any | Array<string> }) => {
  const { innerWidth }: number | any = useWindowSize();

  // console.log('dsa', items)
  return (
    <div className={styles.creatures}>
      <Divider position={"bottom right"} horizontal={true} noAnim={true} />
      {
        innerWidth <= 1440 ?
          <>
            {
              items?.map((_: any, i: number) => (
                <div key={i + 34211} className={styles.wrapper}>
                  <Item isArtist={true} image={_?.img.data.attributes.url} description={_?.description} href={_?.href || '/'} />
                  <img className={styles.wrapperImgNon} src={'/showAll.svg'} width={360} height={513} alt='' />
                  <Divider position={"top right"} noAnim={true} />
                  <Divider position={"bottom right"} horizontal={true} noAnim={true} />
                </div>
              ))
            }

          </>

          :
          <>
            <div className={styles.wrapper}>
              {
                items[0] &&
                <Item isArtist={true} image={items[0]?.img.data.attributes.url} description={items[0]?.description} href={items[0]?.href || '/'} />
              }
              <img className={styles.wrapperImgNon} src={'/showAll.svg'} width={360} height={513} alt='' />
              <Divider position={"top right"} noAnim={true} />
            </div>
            <div className={styles.wrapper}>
              {
                items[1] &&
                <Item isArtist={true} image={items[1]?.img.data.attributes.url} description={items[1]?.description} href={items[1]?.href || '/'} />
              }
              <img className={styles.wrapperImgNon} src={'/showAll.svg'} width={360} height={513} alt='' />
              <Divider position={"top right"} noAnim={true} />
            </div>
            <div className={styles.wrapper}>
              {
                items[2] &&
                <Item isArtist={true} image={items[2]?.img.data.attributes.url} description={items[2]?.description} href={items[2]?.href || '/'} />
              }
              <img className={styles.wrapperImgNon} src={'/showAll.svg'} width={360} height={513} alt='' />
              <Divider position={"top right"} noAnim={true} />
            </div>
            <div className={styles.wrapper}>
              {items[3] &&
                <Item isArtist={true} image={items[3]?.img.data.attributes.url} description={items[3]?.description} href={items[3]?.href || '/'} />
              }
              <img className={styles.wrapperImgNon} src={'/showAll.svg'} width={360} height={513} alt='' />
              <Divider position={"top right"} noAnim={true} />
            </div>
          </>
      }

    </div>
  )
}

export default Creatures