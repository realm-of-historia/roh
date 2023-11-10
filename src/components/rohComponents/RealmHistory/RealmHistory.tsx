import style from './RealmHistory.module.scss'


interface Panegliph {
    header: string,
    welcome: string
}

const RealmHistory = ({header, welcome} : Panegliph) => {

    return(
        <div className={style.container}>
            <div className={style.wrapperInfo}>
                <p>{welcome}</p>
                <p>{header}</p>
            </div>
        </div>
    )
}

export default RealmHistory