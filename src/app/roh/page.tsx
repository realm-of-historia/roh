import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import RealmHistory from "@/components/rohComponents/RealmHistory/RealmHistory"
import { useApiFetch } from "@/composable/useApiFetch"


export default async function Roh() {
    const data = await useApiFetch('api/kingdom-of-history?populate[missionTable][populate]=*&populate[tableProblem][populate]=*&populate[tableSolution][populate]=*&populate[ribbon][populate]=*&populate[scheme][populate]=*&populate[mobileDiagram][populate]=*&populate[journeyImg][populate]=*&populate[DescriptionTravelPicture][populate]=*&populate[TheAtriumTable][populate]=*&populate[slogan][populate]=*')
    return (
        <>
            <WrapperTexture>
                <RealmHistory header={data?.data.attributes.header} welcome={data?.data.attributes.welcome}/>
            </WrapperTexture>
        </>
    )
}

