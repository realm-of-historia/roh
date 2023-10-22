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
  

export const metadata: Metadata = {
  title: 'Realm of Historia - Preserving Cultural Heritage',
  description: `Realm of Historia is a pioneering  project leveraging blockchain technology to preserve global cultural heritage sites, starting with Armenia's ancient Carahunge astronomical observatory.`,
  keywords: 'Carahunge, Armenia, blockchain, culture, heritage, history, art, preservation, astronomy, observatory, Solana',
  openGraph: {
    images: '/metaLogo.png'
  }
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const dataHeader = await useApiFetch('api/header?populate=*')
  const dataDigest = await useApiFetch('api/footer?populate[socialNetwork][populate]=*')

  // async function getPrivateKey() {
  //   const privateKey = await authConfig.provider?.request({
  //     method: "solanaPrivateKey"
  //   }).then((data: any) => {
  //     console.log(data)
  //   })
  // } 

  //   getPrivateKey()


  // authConfig.on(ADAPTER_EVENTS.CONNECTED, (data: any) => {
  //   getPrivateKey()
  // })
  
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <LenisScroll />
        <Header data={dataHeader.data.attributes.link} />
        <Suspense fallback>
          {children}
        </Suspense>
        <Digest data={dataDigest.data.attributes}></Digest>
      </body>
    </html>
  )
}
