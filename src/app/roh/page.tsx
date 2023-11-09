import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import HistoriaMission from "@/components/rohComponents/HistoriaMission/HistoriaMission"
import RealmHistory from "@/components/rohComponents/RealmHistory/RealmHistory"
import { useApiFetch } from "@/composable/useApiFetch"
import { useSectionData } from "@/composable/useSectionData"
import AboutTheProjectWrapper from "@/views/HomePage/screens/AboutTheProject/AboutTheProjectWrapper"


export default async function Roh() {
    const data = await useApiFetch('api/kingdom-of-history?populate[missionTable][populate]=*&populate[tableProblem][populate]=*&populate[tableSolution][populate]=*&populate[ribbon][populate]=*&populate[scheme][populate]=*&populate[mobileDiagram][populate]=*&populate[journeyImg][populate]=*&populate[DescriptionTravelPicture][populate]=*&populate[TheAtriumTable][populate]=*&populate[slogan][populate]=*')
    const missionTable = useSectionData(data, 'missionTable')

    return (
        <>
            <WrapperTexture>
                <RealmHistory header={data?.data.attributes.header} welcome={data?.data.attributes.welcome}/>
                <AboutTheProjectWrapper />
                <HistoriaMission data={missionTable}/>
            </WrapperTexture>
        </>
    )
}

