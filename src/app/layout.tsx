// import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import LenisScroll from '@/components/LenisScroll/LenisScroll'
import '@/assets/index.scss'
import { Suspense, useEffect } from 'react'
import { useApiFetch } from '@/composable/useApiFetch'
import Header from '@/components/Header/Header'
import Digest from '@/components/Digest/Digest'
import authConfig from '@/authConfig/authConfig'
import {ADAPTER_EVENTS} from '@web3auth/base'
import {ProviderDelay} from '../context/ProviderDelay'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import WrapperDefoultData from './WrapperDefoultData'
import { useSectionData } from '@/composable/useSectionData'
import { ToastContainer } from 'react-toastify'
  

export const metadata: Metadata = {
  title: 'Realm of Historia - Preserving Cultural Heritage',
  description: `Realm of Historia is a pioneering  project leveraging blockchain technology to preserve global cultural heritage sites, starting with Armenia's ancient Carahunge astronomical observatory.`,
  keywords: 'Carahunge, Armenia, blockchain, culture, heritage, history, art, preservation, astronomy, observatory, Solana',
  // openGraph: {
  //   images: '/metaLogo.png'
  // }
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const dataHeader = await useApiFetch('api/header?populate[networks][populate]=*&populate[link][populate]=*&populate[logo][populate]=*&populate[support][populate]=*&populate[subject][populate]=*&populate[searchIcon][populate]=*&populate[authorizedUserMenu][populate]=*&populate[authorizedUserBurger][populate]=*')  
  const dataDigest = await useApiFetch('api/footer?populate[socialNetwork][populate]=*')
  const generalData = await useApiFetch('api/general-content?populate[about_the_projects][populate]=*&populate[carahunges][populate]=*&populate[join_uses][populate]=*')
  const instagramData = await useApiFetch('api/instagram-post?populate[post][populate]=*')
  const dataAboutProject = useSectionData(generalData, 'about_the_projects')
  const datacarahunges = useSectionData(generalData, 'carahunges')
  const datajoinUses = useSectionData(generalData, 'join_uses')
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} id='body'>
        <ProviderDelay>
          <LenisScroll />
          <WrapperDefoultData dataAbout={dataAboutProject} datacarahunges={datacarahunges} datajoinUses={datajoinUses} dataInstagram={instagramData?.data.attributes}/>
            <Header data={dataHeader?.data.attributes} />
              {children}
          <WrapperTexture>
            <Digest data={dataDigest?.data.attributes}></Digest>
          </WrapperTexture>
        </ProviderDelay>
        <ToastContainer />
      </body>
    </html>
  )
}
