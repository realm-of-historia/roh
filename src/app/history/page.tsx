import React from 'react'
import HistoryView from '@/views/UserPage/screens/History/HistoryView'
import { useApiFetch } from '@/composable/useApiFetch'
import { useSectionData } from '@/composable/useSectionData'
import HeaderHistory from '@/components/HistoryPageComponent/HeaderHistory/HeaderHistory'
import HeritageDefault from '@/views/HomePage/screens/Heritage/HeritageDefault'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import CarahungeHistory from '@/components/HistoryPageComponent/CarahungeHistory/CarahungeHistory'


export default async function HistoryPage() {

    const data = await useApiFetch('api/history?&populate[historyTable][populate]=*&populate[carahunge][populate]=*')
    const header = useSectionData(data, 'header')
    const subtitle = useSectionData(data, 'subtitle')
    const historyTable = useSectionData(data, 'historyTable')

    const dataHeaderHistory = {
        header, subtitle
    }

    return (
        <>
            <WrapperTexture>
                <HeaderHistory data={dataHeaderHistory} />
                <CarahungeHistory data={historyTable}/>
                <HeritageDefault />
            </WrapperTexture>
        </>
        // <HistoryView></HistoryView> // раньше была страница
    )
}