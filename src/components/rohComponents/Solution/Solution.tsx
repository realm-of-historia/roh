
import Text from '@/components/Text/Text'
import style from './Solution.module.scss'
import Divider from '@/components/Divider/Divider'

const Solution = ({ data, header }: any) => {
    console.log('Solution', data)
    return (
        <div className={style.container}>
            <div className={style.header}>
                <Text>
                    <h2>{header}</h2>
                </Text>
                <Divider position={'top left'} horizontal={true} noAnim={true}/>
                <Divider position={'bottom left'} horizontal={true} />
            </div>
            <div className={style.wrapperHeaderTable}>
                <Divider position={'top right'} />
                <div className={style.headerTableCell}>
                    <p>{data?.leftName}</p>
                </div>
                <div className={style.headerTableCell}>
                    <p>{data?.rightName}</p>
                </div>
                <Divider position={'bottom left'} horizontal={true} />
            </div>
            <div className={style.wrapperTable}>
                {
                    data?.table.map((_: any, i: number) => (
                        <div key={i + 4431} className={style.cell}>
                            <p>{_.name}</p>
                            <p>{_.description}</p>
                            <Divider position={'top right'} />
                            <Divider position={'bottom right'} horizontal={true}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Solution