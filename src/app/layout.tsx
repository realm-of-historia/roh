import type { Metadata } from 'next'
import LenisScroll from '@/components/LenisScroll/LenisScroll'
import '@/assets/index.scss'
import { useApiFetch } from '@/composable/useApiFetch'
import Header from '@/components/Header/Header'
import Digest from '@/components/Digest/Digest'
import {ProviderDelay} from '../context/ProviderDelay'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import WrapperDefoultData from './WrapperDefoultData'
import { useSectionData } from '@/composable/useSectionData'
import { ToastContainer } from 'react-toastify'
import { getServerSession } from 'next-auth'
import SessionProvider from '../components/SessionProvider/SessionProvider'
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'Realm of Historia - Preserving Cultural Heritage',
  description: `Realm of Historia is a pioneering  project leveraging blockchain technology to preserve global cultural heritage sites, starting with Armenia's ancient Carahunge astronomical observatory.`,
  keywords: 'Carahunge, Armenia, blockchain, culture, heritage, history, art, preservation, astronomy, observatory, Solana',
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const dataHeader = await useApiFetch('api/header?populate[networks][populate]=*&populate[link][populate]=*&populate[logo][populate]=*&populate[support][populate]=*&populate[subject][populate]=*&populate[searchIcon][populate]=*&populate[authorizedUserMenu][populate]=*&populate[authorizedUserBurger][populate]=*')  
  const dataDigest = await useApiFetch('api/footer?populate[socialNetwork][populate]=*')
  const generalData = await useApiFetch('api/general-content?populate[about_the_projects][populate]=*&populate[carahunges][populate]=*&populate[join_uses][populate]=*')
  const instagramData = await useApiFetch('api/instagram-post?populate[post][populate]=*')
  const dataAboutProject = useSectionData(generalData, 'about_the_projects')
  const datacarahunges = useSectionData(generalData, 'carahunges')
  const datajoinUses = useSectionData(generalData, 'join_uses')
  const session = await getServerSession();

  return (
    <html lang="en">
      <Head>
        <title>Realm of Historia - Preserving Cultural Heritage</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@RealmofHistoria" />
        <meta name="twitter:creator" content="@RealmofHistoria" />
        <meta property="og:url" content="https://www.realmofhistoria.com/" />
        <meta property="og:title" content="Realm of Historia - Preserving Cultural Heritage" />
        <meta property="og:description" content="Realm of Historia is a pioneering  project leveraging blockchain technology to preserve global cultural heritage sites, starting with Armenia's ancient Carahunge astronomical observatory." />
        <meta property="og:image" content="https://landingpage-ldfymt793-arthur-popov.vercel.app/images/metaLogo.png" />
      </Head>
      <body suppressHydrationWarning={true} id='body'>
        <SessionProvider session={session}>
          <ProviderDelay>
            <LenisScroll />
            <WrapperDefoultData dataAbout={dataAboutProject} datacarahunges={datacarahunges} datajoinUses={datajoinUses} dataInstagram={instagramData?.data.attributes}/>
              <Header data={dataHeader?.data.attributes} />
                {children}
            <WrapperTexture>
              <Digest data={dataDigest?.data.attributes}></Digest>
            </WrapperTexture>
          </ProviderDelay>
        </SessionProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
