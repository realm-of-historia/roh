import HashAnchor from "@/components/HashAnchor/HashAnchor"
import UserLayout from "@/components/UserLayout/UserLayout"
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture"
import MyRealm from "@/views/UserPage/screens/MyRealm/MyRealm"


const myRealmPage = () => {
    const dataMyRealm = [
        {
            url: '/NFT.png'
        },
        {
            url: '/NFT.png'
        },
        {
            url: '/NFT.png'
        },
        {
            url: '/NFT.png'
        },

    ]
    return (
        <>
            <WrapperTexture>
                <MyRealm data={dataMyRealm} />
            </WrapperTexture>
        </>

    )
}

export default myRealmPage