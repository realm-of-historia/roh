import InitiationX from "@/components/CarahungeXPageComponents/InitiationX/InitiationX";
import Preserve from "@/components/CarahungeXPageComponents/Preserve/Preserve";
import RealmOfHistory from "@/components/CarahungeXPageComponents/RealmOfHistory/RealmOfHistory";
import TableCarahunge from "@/components/CarahungeXPageComponents/TableCarahunge/TableCarahunge";
import Panegliph from "@/components/Panegliph/Panegliph";
import RunningLine from "@/components/RunningLine/RunningLine";
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture";
import { useApiFetch } from "@/composable/useApiFetch";
import { useSectionData } from "@/composable/useSectionData";

export default async function CarahungeXPage() {
    const data = await useApiFetch('api/carahunge-x?&populate[table][populate]=*&populate[ribbon][populate]=*&populate[ribbon2][populate]=*&populate[initiationTable][populate]=*&populate[selfSustainableHeritage][populate]=*')
    const header = useSectionData(data, 'header')
    const subtitle = useSectionData(data, 'subtitle')
    const preserveHeader = useSectionData(data, 'preserveHeader')
    const preserveDescription = useSectionData(data, 'preserveDescription')
    const table = useSectionData(data, 'table')
    const ribbon = useSectionData(data, 'ribbon')
    const ribbon2 = useSectionData(data, 'ribbon2')
    const initiationTitle = useSectionData(data, 'initiationTitle')
    const initiationSubtitle = useSectionData(data, 'initiationSubtitle')
    const initiationTable = useSectionData(data, 'initiationTable')

    let dataPreserve ={
        preserveHeader, preserveDescription
    }
    let dataRealmOfHistory={
        header, 
        subtitle,
    }
    let dataInitiationX ={
        initiationTitle, initiationSubtitle, initiationTable
    }
    return(
        <>
            <WrapperTexture>
                <RealmOfHistory data={dataRealmOfHistory}/>
                <Preserve data={dataPreserve}/>
                <Panegliph isFirst={false}/>
                <TableCarahunge data={table}/>
                <RunningLine image={ribbon?.data.attributes.url} />
                <InitiationX data={dataInitiationX}/>
            </WrapperTexture>
        </>
    )
}