import HashAnchor from "@/components/HashAnchor/HashAnchor";
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture";
import { useApiFetch } from "@/composable/useApiFetch";
import { useSectionData } from "@/composable/useSectionData";
import AboutTheProject from "@/views/HomePage/screens/AboutTheProject/AboutTheProject";
import Heritage from "@/views/HomePage/screens/Heritage/Heritage";
import HeritageDefault from "@/views/HomePage/screens/Heritage/HeritageDefault";



export default async function Mission() {
    const data = await useApiFetch('api/mission?populate=*')
    const missionHeader = useSectionData(data, 'missionHeader')

    return (
        <>
            <WrapperTexture>
                <HashAnchor />
            </WrapperTexture>
            <WrapperTexture>
                <Heritage data={missionHeader} />
            </WrapperTexture>
            <WrapperTexture>
                <AboutTheProject />
            </WrapperTexture>
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
        </>
    )
}
