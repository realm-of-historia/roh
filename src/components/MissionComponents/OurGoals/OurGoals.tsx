
import Markdown from 'react-markdown'
import style from './OurGoals.module.scss'
import Divider from '@/components/Divider/Divider'


const OurGoals = ({ data }: any) => {

    return (
        <div className={style.container}>
            <div className={style.leftColumn}>
                <h2>{data?.ourGoals.name}</h2>
                <p>{data?.ourGoals.description}</p>
            </div>
            <div className={style.description}>
                <Markdown>{data?.descriptionOurGoals}</Markdown>
                <Divider position={'top left'} />
                <Divider position={'top left'} horizontal={true} />
            </div>
        </div>
    )
}

export default OurGoals