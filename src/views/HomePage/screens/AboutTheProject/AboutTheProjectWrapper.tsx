import { useApiFetch } from "@/composable/useApiFetch"
import AboutTheProject from "./AboutTheProject"
import { useSectionData } from "@/composable/useSectionData"


const AboutTheProjectWrapper = async () => {
    const data = await useApiFetch('api/about-the-projects?populate=*')
    // const dataAboutTheProject = useSectionData(data, 'aboutTheProject')
    return(
        <>
        <AboutTheProject data={data?.data[0].attributes.aboutTheProject} />
        </>
    )
}

export default AboutTheProjectWrapper