
import Text from '@/components/Text/Text'
import style from './TableCarahunge.module.scss'
import Divider from '@/components/Divider/Divider'
import img from '../../../../public/graphicHoverB.png'
import arrow from '../../../../public/arrowTr.svg'
import Image from 'next/image'
import Link from 'next/link'

const TableCarahunge = ({ data }: any) => {

    return (
        <div className={style.container}>
            <Divider position={'top left'} horizontal={true}></Divider>
            <div className={style.containerTable}>
                <Divider position={'top left'}></Divider>
                {
                    data?.map((_: any, i: number) => (
                        <Link href={_.href || '/'} key={i + 3342} className={style.cell}>
                            <div className={style.wtappercell}>
                                <Text>
                                    <p>{_.name}</p>
                                </Text>
                                <Image className={style.arrow} src={arrow} width={12} height={10} alt='' />
                                <Image className={style.imageHover} src={img} width={448} height={448} alt='' />
                            </div>
                            <Divider position={'top right'}></Divider>
                            <Divider position={'bottom left'} horizontal={true}></Divider>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default TableCarahunge