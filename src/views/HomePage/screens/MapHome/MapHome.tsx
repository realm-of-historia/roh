import ImageMy from '@/components/Image/ImageMy'
import style from './MapHome.module.scss'

export interface StandardComponentProps {
    data?: any,
}
const MapHome = ({ data }: StandardComponentProps) => {
    return (
        <div className={style.container}>
            <picture>
                <ImageMy src={data?.data.attributes.url} width={2000} height={2000} alt='' />
            </picture>
        </div>
    )
}

export default MapHome