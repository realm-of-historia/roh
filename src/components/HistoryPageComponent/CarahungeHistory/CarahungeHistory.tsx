
import ImageMy from '@/components/Image/ImageMy'
import style from './CarahungeHistory.module.scss'
import Markdown from 'react-markdown'
import Divider from '@/components/Divider/Divider'

const CarahungeHistory = ({ data }: any) => {

    return (
        <div className={style.container}>
            {
                data?.map((_: any, i: number) => (
                    <div key={i + 9932} className={`${style.containerTableSections} ${ i % 2 ? style.containerTable : ''}`}>
                        <div className={style.wrapperText}>
                            <div className={style.text}>
                                <h2>{_.header}</h2>
                                <Markdown>{_.description}</Markdown>
                            </div>
                        </div>
                        <div className={style.wrapperImg}>
                            {
                                _?.img?.data?.attributes.url && 
                                <ImageMy src={_.img.data.attributes.url} width={960} height={720} alt = ''/>
                            }
                        </div>
                    </div>
                ))
            }
            <Divider horizontal={true} position={'bottom right'}></Divider>
        </div>
    )
}

export default CarahungeHistory