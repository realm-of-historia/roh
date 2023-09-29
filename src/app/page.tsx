"use client";
import Image from 'next/image'
import styles from './page.module.scss'
import '../assets/index.scss'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import HomePage from './home/page';
import BlogPage from './blog/page';
import ContactsPage from './contacts/page';


export default function Home() {


  return (
    <main className={styles.main}>
        {/* <ToastContainer /> */}
        {/* <Header></Header> */}
        <HomePage></HomePage>
        {/* <BlogPage></BlogPage> */}
        {/* <ArticlePage></ArticlePage> */}
        {/* <ContactsPage></ContactsPage> */}
    </main>
  )
}
