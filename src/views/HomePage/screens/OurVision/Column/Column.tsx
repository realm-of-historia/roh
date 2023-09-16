import styles from './Column.module.scss'

const Column = ({secondText, text, list}: {secondText: string | Array<string> | undefined, text: string | Array<string>, list: Array<string>}) => {

    return (
        <div className={styles.column}>
            <div className={styles.firstBlock}>
                <p>About</p>
                <p>{text}</p>
            </div>
            <div className={styles.secondBlock}>
                <p className={styles.title}>Our vision</p>
                <div className={styles.container}>
                    <p>{secondText}</p>
                    {list.map((element: any) => (
                        <div className={styles.list}>
                            <div className={styles.divider}></div>
                            <p>{element}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Column