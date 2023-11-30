import Link from 'next/link'
import style from './TheVaultTable.module.scss'
import Divider from '@/components/Divider/Divider'

const TheVaultTable = ({ data }: any) => {

    return (
        <div className={style.container}>
            <div className={style.wrapperTable}>
                <Divider position={'left top'} noAnim={true} opacityNo={true}/>
                <Divider position={'left bottom'} noAnim={true} horizontal={true} opacityNo={true}/>
                <div className={style.wrapperP}>
                    <Divider position={'right top'} noAnim={true} opacityNo={true}/>
                    <p className={style.headerTable}>{data?.title}</p>
                </div>
                <div className={style.wrapperP}>
                    <Divider position={'right top'} noAnim={true} opacityNo={true}/>
                    <p className={style.headerTable}>{data?.description}</p>
                </div>
                <div className={style.wrapperP}>
                    <Divider position={'right top'} noAnim={true} opacityNo={true}/>
                    <p className={style.headerTable}>{data?.link}</p>
                </div>
            </div>
            {
                data?.table.map((_: any, i: number) => (
                    <div key={i + 58621} className={style.wrapperTable}>
                        <Divider position={'left top'} noAnim={true} opacityNo={true}/>
                        <Divider position={'left bottom'} noAnim={true} horizontal={true} opacityNo={true}/>
                        <div className={style.wrapperP}>
                            <Divider position={'right top'} noAnim={true} opacityNo={true}/>
                            <p >{_.name}</p>
                        </div>
                        <div className={style.wrapperP}>
                            <Divider position={'right top'} noAnim={true} opacityNo={true}/>
                            <p >{_.description}</p>
                        </div>
                        <div className={style.wrapperP}>
                            <Divider position={'right top'} noAnim={true} opacityNo={true}/>
                            <Link href={_.href || '/'}>{_.link}</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default TheVaultTable