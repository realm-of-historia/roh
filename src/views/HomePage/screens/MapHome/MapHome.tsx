import ImageMy from '@/components/Image/ImageMy'
import style from './MapHome.module.scss'

export interface StandardComponentProps {
    data?: any,
}
const MapHome = ({data} : StandardComponentProps) => {
    console.log('nap', data)
    return(
        <div className={style.container}>
            <ImageMy src={data?.data.attributes.url} width={1920} height={700} alt = '' />
        </div>
    )
}

export default MapHome