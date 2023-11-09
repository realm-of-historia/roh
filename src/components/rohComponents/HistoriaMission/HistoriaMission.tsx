import Divider from '@/components/Divider/Divider'
import styles from './HistoriaMission.module.scss'
import Markdown from 'react-markdown'
import Text from '@/components/Text/Text'

const HistoriaMission = ({ data }: any) => {
    console.log('HistoriaMission', data)
    return (
        <div className={styles.container}>
            <div className={styles.wrapperHeader}>
                <Text>
                    <h2>{data?.header}</h2>
                </Text>
                <Divider position={'bottom left'} horizontal={true} />
            </div>
            <div className={styles.wrapperTable}>
                <div className={styles.infoTable}>
                    <Text>
                        <p>{data?.titleTable}</p>
                    </Text>
                </div>
                {
                    data?.data.map((_: any, i: number) => (
                        <div key={i + 990} className={styles.infoTable}>
                            <Text>
                                <Markdown>{_.description}</Markdown>
                            </Text>
                            <Divider position={'top left'} horizontal={true} />
                        </div>
                    ))
                }
                <Divider position={'top left'} />
            </div>
        </div>
    )
}

export default HistoriaMission