import React from 'react'
import { useApiFetch } from '@/composable/useApiFetch'
import { useSectionData } from '@/composable/useSectionData'
import HeaderHistory from '@/components/HistoryPageComponent/HeaderHistory/HeaderHistory'
import HeritageDefault from '@/views/HomePage/screens/Heritage/HeritageDefault'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import CarahungeHistory from '@/components/HistoryPageComponent/CarahungeHistory/CarahungeHistory'
import History from '@/components/HistoryPageComponent/History/History'
import HashAnchor from '@/components/HashAnchor/HashAnchor'


export default async function HistoryPage() {

    const data = await useApiFetch('api/history?&populate[historyTable][populate]=*&populate[carahunge][populate]=*')
    const header = useSectionData(data, 'header')
    const subtitle = useSectionData(data, 'subtitle')
    const historyTable = useSectionData(data, 'historyTable')
    const carahunge = useSectionData(data, 'carahunge')
    const carahungeHistory = useSectionData(data, 'carahungeHistory')
    const carahungeHistorySubtitle = useSectionData(data, 'carahungeHistorySubtitle')
    const dataHistory = {
        carahunge, carahungeHistory, carahungeHistorySubtitle
    }
    const dataHeaderHistory = {
        header, subtitle
    }

    return (
        <>
            <WrapperTexture>
                <HashAnchor />
            </WrapperTexture>
            <WrapperTexture>
                <HeaderHistory data={dataHeaderHistory} />
            </WrapperTexture>
            <WrapperTexture>
                <CarahungeHistory data={historyTable} />
            </WrapperTexture>
                <History data={dataHistory} />
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
        </>
    )
}