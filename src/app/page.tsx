"use client";
import Image from 'next/image'
import styles from './page.module.scss'
import '../assets/index.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header/Header';
import HomePage from '@/views/HomePage/HomePage';


export default function Home() {


  return (
    <main className={styles.main}>
        {/* <ToastContainer /> */}
        <Header></Header>
        <HomePage></HomePage>
    </main>
  )
}
