import style from './Preserve.module.scss'


const Preserve = ({data} : any) => {

    return(
        <div className={style.contaimer}> 
            <p>{data?.preserveHeader}</p>
            <p>{data?.preserveDescription}</p>
        </div>
    )
}

export default Preserve 