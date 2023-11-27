import HashAnchor from "@/components/HashAnchor/HashAnchor"
import Panegliph from "@/components/Panegliph/Panegliph"
import Roadmap from "@/components/RoadmapPageComponents/Roadmap"
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import { useApiFetch } from "@/composable/useApiFetch"
import HeritageDefault from "@/views/HomePage/screens/Heritage/HeritageDefault"


export default async function RoadmapPage() {
    const data = await useApiFetch('api/roadmap-page?populate[table][populate]=*')
    return (
        <>
            <HashAnchor />
            <WrapperTexture>
                <Roadmap data={data?.data.attributes} />
            </WrapperTexture>
            <WrapperTexture>
                <Panegliph isFirst={true} />
            </WrapperTexture>
            <WrapperTexture>
                <HeritageDefault />
            </WrapperTexture>
        </>
    )
}