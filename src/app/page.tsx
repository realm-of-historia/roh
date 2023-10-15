// "use client";
import Image from 'next/image'
import styles from './page.module.scss'
import '../assets/index.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import HomeView from '@/views/HomePage/HomeView';

export default function Home() {


  return (
    <main className={styles.main}>
      <HomeView></HomeView>
    </main>
  )
}
