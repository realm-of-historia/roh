import Text from '@/components/Text/Text'
import style from './Problem.module.scss'
import Divider from '@/components/Divider/Divider'
import Markdown from 'react-markdown'

const Problem = ({ data, header }: any) => {

    return (
        <div className={style.container}>
            <div className={style.header}>
                <Text>
                    <h2>{header}</h2>
                </Text>
                <Divider position={'top left'} horizontal={true} />
                <Divider position={'bottom left'} horizontal={true} />
            </div>
            <div className={style.table}>
                <div className={style.tableInfo}>
                    <div className={style.cellTable}>
                        <p>{data?.What}</p>
                    </div>
                    <div className={style.cellTable}>
                        <p>{data?.Description}</p>
                        <Divider position={'bottom left'} />
                        <Divider position={'bottom right'} />
                    </div>
                    <div className={style.cellTable}>
                        <p>{data?.Effect}</p>
                    </div>
                </div>
                {
                    data?.table.map((_: any, i: number) => (
                        <div className={style.tableInfo}>
                            <div className={style.cellTable}>
                                <Markdown>{_.What}</Markdown>
                                <Divider position={'top left'} horizontal={true} />
                            </div>
                            <div className={style.cellTable}>
                                <Markdown>{_.Description}</Markdown>
                                <Divider position={'bottom left'} />
                                <Divider position={'bottom right'} />
                                <Divider position={'top left'} horizontal={true} />
                            </div>
                            <div className={style.cellTable}>
                                <Markdown>{_.Effect}</Markdown>
                                <Divider position={'top left'} horizontal={true} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Problem