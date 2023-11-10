"use client"
import { useMemo } from 'react'
import style from './Burger.module.scss'
import { useAuthStore } from '@/store/store'
import Link from 'next/link'
import authConfig from '@/authConfig/authConfig'
import ImageMy from '@/components/Image/ImageMy'
import Divider from '@/components/Divider/Divider'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'

export interface StandardComponentProps {
    networks?: any,
    link?: any,
    button?: any
}

const Burger = ({ networks, link, button }: StandardComponentProps) => {
    const burger: any = useAuthStore((state: any) => (state.isBurger))

    const unLogIn = () => {
        if (authConfig.connected) {
            authConfig.logout();
            console.log(authConfig.connected)
        } else {
            console.log('disconnected')
        }
    }
    const handler = (href: any) => {
        window.open(href)
    }
    return (
        <>
        <div className={`${style.stub} ${burger ? style.stubActive : ''}`} onClick={() => useAuthStore.setState({ isBurger: false })}></div>
        <div className={`${style.wrapperBurger} ${burger ? style.wrapperBurgerActive : ''}`} >
            <WrapperTexture>
                <div className={style.avatar}>
                    <img src='/Avatar.png' width={38} height={38} />
                </div>
                <div className={style.link}>
                    {/* <Link href='/user/personal'><p>My Profile</p></Link>
                <Link href='/lobby'><p>3d Lobby</p></Link>
                <Link href='/marketplace'><p>Marketplace</p></Link>
                <Link href='/artists'><p>Artists</p></Link> */}
                    {
                        link?.map((_: any, i: number) => (
                            <Link key={i + 321} href={_.href || '/'}><p>{_.name}</p></Link>
                        ))
                    }
                    <p onClick={unLogIn}>Log Out</p>
                </div>
                <button className={style.button}>{button}</button>
                <div className={style.network}>
                    {
                        networks?.map((_: any, i: number) => (
                            <div key={i + 741} onClick={() => handler(_.href)} className={style.iconHeader}>
                                <ImageMy src={_.icon.data.attributes.url} width={24} height={24} alt='' />
                                <Divider position={'right top'} />
                                <Divider position={'left top'} />
                            </div>
                        ))
                    }
                </div>
            </WrapperTexture>
        </div>
        </>
    )
}

export default Burger