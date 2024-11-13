import { useApiFetch } from '@/composable/useApiFetch'
import MarketplaceView from '@/views/MarketplaceView/MarketplaceView'
import React from 'react'



export default async function MarketplacePage() {
    const data = await useApiFetch('api/marketplace?populate=*')
    return(
        <MarketplaceView data={data} />
    )
}