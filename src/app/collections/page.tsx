import CarahungeX from "@/components/CollectionsComponents/CarahungeX/CarahungeX"
import HashAnchor from "@/components/HashAnchor/HashAnchor"
import RunningLine from "@/components/RunningLine/RunningLine"
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import { useApiFetch } from "@/composable/useApiFetch"
import { useSectionData } from "@/composable/useSectionData"
import HeritageDefault from "@/views/HomePage/screens/Heritage/HeritageDefault"


export default async function Сollections() {
    const data = await useApiFetch('api/collections-page?populate=*')
    const ribbon = useSectionData(data, 'ribbon')
    const header = useSectionData(data, 'header')
    const date = useSectionData(data, 'date')
    const href = useSectionData(data, 'href')
    const button = useSectionData(data, 'button')
    const dataCarahungeX = {
        header, date, href, button
    }
    return (
        <>
            <WrapperTexture>
                <HashAnchor />
            </WrapperTexture>
            <WrapperTexture>
                <RunningLine image={ribbon?.data.attributes.url} />
            </WrapperTexture>
            <WrapperTexture>
                <CarahungeX data={dataCarahungeX} />
            </WrapperTexture>
            {/* <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture> */}
        </>
    )
}