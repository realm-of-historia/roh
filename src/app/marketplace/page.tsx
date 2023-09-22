import React from 'react'
import Header from '@/components/Header/Header'
import Panegliph from '@/components/Panegliph/Panegliph'
import Marketplace from '@/views/HomePage/screens/Marketplace/Marketplace'
import Digest from '@/components/Digest/Digest'
import MarketplaceTitle from '@/components/MarketplaceTitle/MarketplaceTItle'

export default function MarketplacePage() {
    return(
        <div style={{overflowX: 'hidden'}}>
            <Header></Header>
            <MarketplaceTitle></MarketplaceTitle>
            <Panegliph isFirst={false}></Panegliph>
            <Marketplace isMarket={true}></Marketplace>
            <Marketplace isMarket={true}></Marketplace>
            <Digest></Digest>
        </div>
    )
}