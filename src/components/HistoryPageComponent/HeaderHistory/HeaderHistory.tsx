import Text from '@/components/Text/Text'
import style from './HeaderHistory.module.scss'

const HeaderHistory = ({data} : any) => {

    return (
        <div className={style.container}>
            <Text>
                <p>{data?.header}</p>
            </Text>
            <Text>
                <p>{data?.subtitle}</p>
            </Text>
        </div>
    )
}

export default HeaderHistory