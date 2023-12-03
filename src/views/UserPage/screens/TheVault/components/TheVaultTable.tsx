import Link from 'next/link'
import style from './TheVaultTable.module.scss'
import Divider from '@/components/Divider/Divider'

const TheVaultTable = ({ data }: any) => {
    console.log(data)
    return (

        <div className={style.container}>
            <>
                {
                    data ?
                        <>
                            <div className={style.wrapperTable}>
                                <Divider position={'left top'} noAnim={true} opacityNo={true} />
                                <Divider position={'left bottom'} noAnim={true} horizontal={true} opacityNo={true} />
                                <div className={style.wrapperP}>
                                    <Divider position={'right top'} noAnim={true} opacityNo={true} />
                                    {/* <p className={style.headerTable}>{data?.title}</p> */}
                                    <p className={style.headerTable}>Title</p>
                                </div>
                                <div className={style.wrapperP}>
                                    <Divider position={'right top'} noAnim={true} opacityNo={true} />
                                    {/* <p className={style.headerTable}>{data?.description}</p> */}
                                    <p className={style.headerTable}>Description</p>
                                </div>
                                <div className={style.wrapperP}>
                                    <Divider position={'right top'} noAnim={true} opacityNo={true} />
                                    {/* <p className={style.headerTable}>{data?.link}</p> */}
                                    <p className={style.headerTable}>Link</p>
                                </div>
                            </div>
                            {
                                data?.documents.map((_: any, i: number) => (
                                    <div key={i + 58621} className={style.wrapperTable}>
                                        <Divider position={'left top'} noAnim={true} opacityNo={true} />
                                        <Divider position={'left bottom'} noAnim={true} horizontal={true} opacityNo={true} />
                                        <div className={style.wrapperP}>
                                            <Divider position={'right top'} noAnim={true} opacityNo={true} />
                                            <p >{_.title}</p>
                                        </div>
                                        <div className={style.wrapperP}>
                                            <Divider position={'right top'} noAnim={true} opacityNo={true} />
                                            <p >{_.description}</p>
                                        </div>
                                        <div className={style.wrapperP}>
                                            <Divider position={'right top'} noAnim={true} opacityNo={true} />
                                            <Link href={`https://api.realmofhistoria.com${_.document.url}`}>{_.content}</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                        :
                        <div className={style.wrapperloader}>
                            <div className={style.loader}></div>
                        </div>
                }
            </>

        </div>
    )
}
export default TheVaultTable