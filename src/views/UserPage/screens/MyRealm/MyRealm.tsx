import style from './MyRealm.module.scss'


const MyRealm = ({data} : any) => {
    return(
        <div className={style.wrapper}>   
            {
                data?.map((_ :any, i : number) => (
                    <img src={_.url} width={448} height={448} alt=''/>
                ))
            }
        </div>
    )
}

export default MyRealm