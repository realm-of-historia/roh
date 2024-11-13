import HashAnchor from "@/components/HashAnchor/HashAnchor";
import UserLayout from "@/components/UserLayout/UserLayout";



export default function UserLayoutPage({children} :{children: React.ReactNode}) {
    return(
        <div>
            <HashAnchor />
            <UserLayout></UserLayout>
            {children}
        </div>
    )
}