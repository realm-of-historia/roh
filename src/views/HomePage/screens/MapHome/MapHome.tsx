import ImageMy from '@/components/Image/ImageMy'
import style from './MapHome.module.scss'

export interface StandardComponentProps {
    data?: any,
    poster? : string
}
const MapHome = ({ data, poster }: StandardComponentProps) => {
    return (
        <div className={style.container}>
            <picture>
                <ImageMy src={data?.data.attributes.url} width={2000} height={2000} alt='' poster={poster} />
            </picture>
        </div>
    )
}

export default MapHome