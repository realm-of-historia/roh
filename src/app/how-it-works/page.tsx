import HowItWorksTable from "@/components/HowItWorksComponents/HowItWorksTable/HowItWorksTable";
import Solana from "@/components/HowItWorksComponents/Solana/Solana";
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture";
import Scheme from "@/components/rohComponents/Scheme/Scheme";
import Solution from "@/components/rohComponents/Solution/Solution";
import { useApiFetch } from "@/composable/useApiFetch";
import { useSectionData } from "@/composable/useSectionData";
import Heritage from "@/views/HomePage/screens/Heritage/Heritage";
import HeritageDefault from "@/views/HomePage/screens/Heritage/HeritageDefault";




export default async function HowItWorks() {
    const data = await useApiFetch('api/how-it-work?populate[scheme][populate]=*&populate[mobileDiagram][populate]=*&populate[table][populate]=*&populate[tableSolution][populate]=*&populate[solana][populate]=*&populate[solanaLogo][populate]=*&populate[ribbon][populate]=*&populate[header][populate]=*')
    const header = useSectionData(data, 'header')
    const scheme = useSectionData(data, 'scheme')
    const mobileDiagram = useSectionData(data, 'mobileDiagram')
    const table = useSectionData(data, 'table')
    const titleSolution = useSectionData(data, 'titleSolution')
    const tableSolution = useSectionData(data, 'tableSolution')
    const ribbon = useSectionData(data, 'ribbon')
    const solanaLogo = useSectionData(data, 'solanaLogo')
    const solana = useSectionData(data, 'solana')
    let dataSolana = {
        ribbon, solanaLogo, solana
    }

    return(
        <>
            <WrapperTexture>
                <Heritage data={header} />
                <Scheme img={scheme?.data.attributes.url} mobailImg={mobileDiagram?.data.attributes.url}/>
                <HowItWorksTable data={table} />
                <Solution data={tableSolution} header={titleSolution}/>
                <Solana data={dataSolana} />
                <HeritageDefault />
            </WrapperTexture>
        </>
    )
}