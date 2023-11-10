import RunningLine from "@/components/RunningLine/RunningLine"
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import HistoriaMission from "@/components/rohComponents/HistoriaMission/HistoriaMission"
import Journey from "@/components/rohComponents/Journey/Journey"
import Problem from "@/components/rohComponents/Problem/Problem"
import RealmHistory from "@/components/rohComponents/RealmHistory/RealmHistory"
import Scheme from "@/components/rohComponents/Scheme/Scheme"
import Solution from "@/components/rohComponents/Solution/Solution"
import TheAtrium from "@/components/rohComponents/TheAtrium/TheAtrium"
import { useApiFetch } from "@/composable/useApiFetch"
import { useSectionData } from "@/composable/useSectionData"
import AboutTheProject from "@/views/HomePage/screens/AboutTheProject/AboutTheProject"
import HeritageDefault from "@/views/HomePage/screens/Heritage/HeritageDefault"


export default async function Roh() {
    const data = await useApiFetch('api/kingdom-of-history?populate[missionTable][populate]=*&populate[tableProblem][populate]=*&populate[tableSolution][populate]=*&populate[ribbon][populate]=*&populate[scheme][populate]=*&populate[mobileDiagram][populate]=*&populate[journeyImg][populate]=*&populate[DescriptionTravelPicture][populate]=*&populate[TheAtriumTable][populate]=*&populate[slogan][populate]=*')
    const missionTable = useSectionData(data, 'missionTable')
    const tableProblem = useSectionData(data, 'tableProblem')
    const headerProblem = useSectionData(data, 'headerProblem')
    const titleSolution = useSectionData(data, 'TitleSolution')
    const tableSolution = useSectionData(data, 'tableSolution')
    const ribbon = useSectionData(data, 'ribbon')
    const imgScheme = useSectionData(data, 'scheme')
    const mobailImgScheme = useSectionData(data, 'mobileDiagram')
    const journeyImg = useSectionData(data, 'journeyImg')
    const descriptionTravelPicture = useSectionData(data, 'DescriptionTravelPicture')
    const theAtriumTitle = useSectionData(data, 'TheAtriumTitle')
    const theAtriumTable = useSectionData(data, 'TheAtriumTable')
    return (
        <>
            <WrapperTexture>
                <RealmHistory header={data?.data.attributes.header} welcome={data?.data.attributes.welcome}/>
                <AboutTheProject/>
                <HistoriaMission data={missionTable}/>
                <Problem data={tableProblem} header={headerProblem}/>
                <Solution data={tableSolution} header={titleSolution}/>
                <RunningLine image={ribbon?.data.attributes.url}></RunningLine>
                <Scheme img={imgScheme?.data.attributes.url} mobailImg={mobailImgScheme?.data.attributes.url}/>
                <Journey data={descriptionTravelPicture} img={journeyImg?.data.attributes.url}/>
                <TheAtrium data={theAtriumTable} header={theAtriumTitle}/>
                <HeritageDefault />
            </WrapperTexture>
        </>
    )
}

