// import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import LenisScroll from '@/components/LenisScroll/LenisScroll'


export const metadata: Metadata = {
  title: 'Realm of Historia - Preserving Cultural Heritage through NFTs',
  description: `Realm of Historia is a pioneering NFT project leveraging blockchain technology to preserve global cultural heritage sites, starting with Armenia's ancient Carahunge astronomical observatory. `,
  keywords: 'Carahunge, Armenia, NFT, blockchain, culture, heritage, history, art, preservation, astronomy, observatory, metaverse, Polygon'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <LenisScroll/>
        {children}
      </body>
    </html>
  )
}
