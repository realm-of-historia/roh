
import Text from '@/components/Text/Text'
import style from './TheAtrium.module.scss'
import Divider from '@/components/Divider/Divider'
interface Panegliph {
    header?: string,
    data?: any
}
const TheAtrium = ({ header, data }: Panegliph) => {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Text>
                    <h2>{header}</h2>
                </Text>
                <Divider position={'top left'} horizontal={true} />
                <Divider position={'bottom left'} horizontal={true} />
            </div>
            <div className={style.wrapperTable}>
                <div className={style.wrapperTablecell}>
                    <Divider position={'top left'} />
                    {
                        data?.map((_: any, i: number) => (
                            <div key={i + 883} className={style.cell}>
                                <Text>
                                    <p>{_.name}</p>
                                </Text>
                                <Text>
                                    <p>{_.description}</p>
                                </Text>
                                <Divider position={'bottom left'} horizontal={true} />
                                <Divider position={'bottom right'} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default TheAtrium