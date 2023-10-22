import { useApiFetch } from "@/composable/useApiFetch"
import ArtistView from "@/views/ArtistPage/ArtistView"

export default async function Artists() {
    const data = await useApiFetch('api/artists?populate[avatar][populate]=*&populate[work][populate]=*')
    return(
        <ArtistView data={data}></ArtistView>
    )
}