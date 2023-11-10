import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import HistoriaMission from "@/components/rohComponents/HistoriaMission/HistoriaMission"
import Problem from "@/components/rohComponents/Problem/Problem"
import RealmHistory from "@/components/rohComponents/RealmHistory/RealmHistory"
import { useApiFetch } from "@/composable/useApiFetch"
import { useSectionData } from "@/composable/useSectionData"
import AboutTheProject from "@/views/HomePage/screens/AboutTheProject/AboutTheProject"


export default async function Roh() {
    const data = await useApiFetch('api/kingdom-of-history?populate[missionTable][populate]=*&populate[tableProblem][populate]=*&populate[tableSolution][populate]=*&populate[ribbon][populate]=*&populate[scheme][populate]=*&populate[mobileDiagram][populate]=*&populate[journeyImg][populate]=*&populate[DescriptionTravelPicture][populate]=*&populate[TheAtriumTable][populate]=*&populate[slogan][populate]=*')
    const missionTable = useSectionData(data, 'missionTable')
    const tableProblem = useSectionData(data, 'tableProblem')
    const headerProblem = useSectionData(data, 'headerProblem')

    return (
        <>
            <WrapperTexture>
                <RealmHistory header={data?.data.attributes.header} welcome={data?.data.attributes.welcome}/>
                <AboutTheProject/>
                <HistoriaMission data={missionTable}/>
                <Problem data={tableProblem} header={headerProblem}/>
            </WrapperTexture>
        </>
    )
}

