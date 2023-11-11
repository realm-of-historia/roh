import Divider from '@/components/Divider/Divider'
import style from './Preserve.module.scss'


const Preserve = ({data} : any) => {

    return(
        <div className={style.contaimer}> 
            <p>{data?.preserveHeader}</p>
            <p>{data?.preserveDescription}</p>
            <Divider position={'bottom left'} horizontal={true}></Divider>
        </div>
    )
}

export default Preserve 