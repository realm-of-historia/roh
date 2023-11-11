import Column from '@/views/HomePage/screens/Carahunge/Column/Column'
import styles from './InitiationX.module.scss'
import Divider from '@/components/Divider/Divider'
import Text from '@/components/Text/Text'


const InitiationX = ({ data }: any) => {
    return (
        <div className={styles.carahunge}>
            <div className={styles.container}>
                <Divider position={"top right"} />
                <Divider position={"top left"} />
                <Divider position={"top right"} />
                <div className={styles.dot}></div>
                <div className={styles.left}>
                    <Text>
                        <p>{data?.initiationSubtitle}</p>
                    </Text>
                    <Text>
                        <p>{data?.initiationTitle}</p>
                    </Text>
                </div>
                <Column description={data?.initiationTable} initiation={true}></Column>
            </div>
        </div>
    )
}

export default InitiationX