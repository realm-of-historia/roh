import style from './WrapperTexture.module.scss'


const WrapperTexture = ({children} : any) => {
    return(
        
        <div className={style.contentWrapper}>
        <div className={style.wrapperTexture}>
        </div>
            {children}
        </div>
    )
}

export default WrapperTexture