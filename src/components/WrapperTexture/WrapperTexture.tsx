import style from './WrapperTexture.module.scss'


const WrapperTexture = ({ children }: any) => {
    return (

        <div className={style.contentWrapper}>
            {/* <div className={style.wrapperTexture}> */}
                <img src="/texture.png" width={1920} height={800} alt="" />
            {/* </div> */}
            {children}
        </div>
    )
}

export default WrapperTexture