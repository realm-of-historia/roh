// "use client";
import Image from 'next/image'
import styles from './page.module.scss'
import '../assets/index.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import HomeView from '@/views/HomePage/HomeView';
import {useApiFetch} from '../composable/useApiFetch.js'
import {useSectionData} from '../composable/useSectionData.js'

export default async function Home() {
  const data = await useApiFetch('api/home-page?populate=*')
  return (
    <main className={styles.main}>
      <HomeView></HomeView>
    </main>
  )
}
