import HashAnchor from "@/components/HashAnchor/HashAnchor";
import OurGoals from "@/components/MissionComponents/OurGoals/OurGoals";
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture";
import { useApiFetch } from "@/composable/useApiFetch";
import { useSectionData } from "@/composable/useSectionData";
import AboutTheProject from "@/views/HomePage/screens/AboutTheProject/AboutTheProject";
import Heritage from "@/views/HomePage/screens/Heritage/Heritage";
import HeritageDefault from "@/views/HomePage/screens/Heritage/HeritageDefault";



export default async function Mission() {
    const data = await useApiFetch('api/mission?populate=*')
    const missionHeader = useSectionData(data, 'missionHeader')
    const ourGoals = useSectionData(data, 'ourGoals')
    const descriptionOurGoals = useSectionData(data, 'descriptionOurGoals')
    let dataOurGoals = {
        ourGoals, descriptionOurGoals
    }


    return (
        <>
            <WrapperTexture>
                <HashAnchor />
            </WrapperTexture>
            <WrapperTexture>
                <Heritage data={missionHeader} />
            </WrapperTexture>
            {/* <WrapperTexture> */}
                {/* <OurGoals data={dataOurGoals} /> */}
            {/* </WrapperTexture> */}
            <WrapperTexture>
                <AboutTheProject />
            </WrapperTexture>
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
        </>
    )
}
