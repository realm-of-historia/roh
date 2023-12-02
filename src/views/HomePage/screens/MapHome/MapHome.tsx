import ImageMy from '@/components/Image/ImageMy'
import style from './MapHome.module.scss'

export interface StandardComponentProps {
    data?: any,
}
const MapHome = ({data} : StandardComponentProps) => {
    return(
        <div className={style.container}>
            <ImageMy src={data?.data.attributes.url} width={920} height={700} alt = '' />
        </div>
    )
}

export default MapHome