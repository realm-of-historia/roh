
import Text from '@/components/Text/Text'
import style from './TableCarahunge.module.scss'
import Divider from '@/components/Divider/Divider'
import img from '../../../../public/graphicHoverB.png'
import Image from 'next/image'

const TableCarahunge = ({ data }: any) => {

    return (
        <div className={style.container}>
            <div className={style.containerTable}>
                <Divider position={'bottom left'}></Divider>
                {
                    data?.map((_: any, i: number) => (
                        <div key={i + 3342} className={style.cell}>
                            <Text>
                                <p>{_.text}</p>
                            </Text>
                            <Image src={img} width={448} height={448} alt=''/>
                            <Divider position={'bottom right'}></Divider>
                            <Divider position={'bottom left'} horizontal={true}></Divider>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TableCarahunge