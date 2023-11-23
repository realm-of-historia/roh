import { useApiFetch } from "@/composable/useApiFetch"
import ArtistView from "@/views/ArtistPage/ArtistView"

export default async function Artists() {
    const data = await useApiFetch('api/artist-page?populate[artists][populate]=avatar&populate[artists][populate]=work.img&populate[artists][populate]=work.description')
    return(
        <ArtistView data={data}></ArtistView>
    )
}