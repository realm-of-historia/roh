import InitiationX from "@/components/CarahungeXPageComponents/InitiationX/InitiationX";
import Preserve from "@/components/CarahungeXPageComponents/Preserve/Preserve";
import RealmOfHistory from "@/components/CarahungeXPageComponents/RealmOfHistory/RealmOfHistory";
import TableCarahunge from "@/components/CarahungeXPageComponents/TableCarahunge/TableCarahunge";
import HashAnchor from "@/components/HashAnchor/HashAnchor";
import RunningLine from "@/components/RunningLine/RunningLine";
import WrapperTexture from "@/components/WrapperTexture/WrapperTexture";
import { useApiFetch } from "@/composable/useApiFetch";
import { useSectionData } from "@/composable/useSectionData";
import CollectionOfWorks from "@/views/HomePage/screens/CollectionOfWorks/CollectionOfWorks";
import Heritage from "@/views/HomePage/screens/Heritage/Heritage";

import '../assets/index.scss'
import 'react-toastify/dist/ReactToastify.css';

export default async function Home() {
  const data = await useApiFetch('api/carahunge-x?&populate[table][populate]=*&populate[ribbon][populate]=*&populate[ribbon2][populate]=*&populate[initiationTable][populate]=*&populate[selfSustainableHeritage][populate]=*')
  const header = useSectionData(data, 'header')
  const subtitle = useSectionData(data, 'subtitle')
  const preserveHeader = useSectionData(data, 'preserveHeader')
  const preserveDescription = useSectionData(data, 'preserveDescription')
  const table = useSectionData(data, 'table')
  const ribbon = useSectionData(data, 'ribbon')
  const ribbon2 = useSectionData(data, 'ribbon2')
  const initiationTitle = useSectionData(data, 'initiationTitle')
  const initiationSubtitle = useSectionData(data, 'initiationSubtitle')
  const initiationTable = useSectionData(data, 'initiationTable')
  const selfSustainableHeritage = useSectionData(data, 'selfSustainableHeritage')

  let dataPreserve = {
      preserveHeader, preserveDescription
  }
  let dataRealmOfHistory = {
      header,
      subtitle,
  }
  let dataInitiationX = {
      initiationTitle, initiationSubtitle, initiationTable
  }
  return (
    <>
      <WrapperTexture>
          <HashAnchor />
      </WrapperTexture>
      <WrapperTexture>
          <RealmOfHistory data={dataRealmOfHistory} />
      </WrapperTexture>
      <WrapperTexture>
          <Preserve data={dataPreserve} />
      </WrapperTexture>
      <WrapperTexture>
          <TableCarahunge data={table} />
      </WrapperTexture>
      <WrapperTexture>
          <RunningLine image={ribbon?.data.attributes.url} />
      </WrapperTexture>
      <WrapperTexture>
          <CollectionOfWorks />
      </WrapperTexture>
      <WrapperTexture>
          <RunningLine image={ribbon2?.data.attributes.url} />
      </WrapperTexture>
      <WrapperTexture>
          <InitiationX data={dataInitiationX} roadColumn={true}/>
      </WrapperTexture>
      <WrapperTexture>
          <Heritage data={selfSustainableHeritage} />
      </WrapperTexture>
    </>
  )
}
