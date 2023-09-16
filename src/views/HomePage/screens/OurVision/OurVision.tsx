import Column from './Column/Column'
import styles from './OurVision.module.scss'

const OurVision = ({secondText, list, text, leftSide}: {secondText: string | Array<string>,list: Array<string>, text: string | Array<string>, leftSide: string | Array<string>}) => {



    return (
        <div className={styles.vision}>
            <div className={styles.left}>
                <p>{leftSide}</p>
            </div>
            <div className={styles.right}>
                <Column secondText={secondText} text={text} list={list}></Column>
            </div>
        </div>
    )
}

export default OurVision