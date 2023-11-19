// "use client";
import Image from 'next/image'
import styles from './page.module.scss'
import '../assets/index.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import HomeView from '@/views/HomePage/HomeView';
import {useApiFetch} from '../composable/useApiFetch.js'
import {useSectionData} from '../composable/useSectionData.js'
import { useState } from 'react';

export default async function Home() {
  const data = await useApiFetch('api/home-page?&populate[videoArticles][populate]=*&populate[swiperTop][populate]=*&populate[article][populate]=*&populate[ribbon][populate]=*&populate[lastPost][populate]=*&populate[articles][populate]=*&populate[article_populars][populate]=*&populate[selfSustainableHeritage][populate]=*&populate[instagramPost][populate]=*&populate[map][populate]=*&populate[ribbon2][populate]=*')

  return (
    <main className={styles.main}>
      <HomeView data={data}></HomeView>
      <ToastContainer />
    </main>
  )
}
