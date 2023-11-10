import Preserve from "@/components/CarahungeXPageComponents/Preserve/Preserve";
import RealmOfHistory from "@/components/CarahungeXPageComponents/RealmOfHistory/RealmOfHistory";
import TableCarahunge from "@/components/CarahungeXPageComponents/TableCarahunge/TableCarahunge";
import Panegliph from "@/components/Panegliph/Panegliph";
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
    let dataPreserve ={
        preserveHeader, preserveDescription
    }
    let dataRealmOfHistory={
        header, 
        subtitle,
    }
    return(
        <>
            <WrapperTexture>
                <RealmOfHistory data={dataRealmOfHistory}/>
                <Preserve data={dataPreserve}/>
                <Panegliph isFirst={false}/>
                <TableCarahunge data={table}/>
            </WrapperTexture>
        </>
    )
}