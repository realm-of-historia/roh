"use client"
import { useEffect, useMemo, useState } from 'react'
import style from './Burger.module.scss'
import { useAuthStore } from '@/store/store'
import Link from 'next/link'
import authConfig from '@/authConfig/authConfig'
import ImageMy from '@/components/Image/ImageMy'
import Divider from '@/components/Divider/Divider'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import { useUserFetch } from '@/composable/useApiFetch'

export interface StandardComponentProps {
    networks?: any,
    link?: any,
    button?: any,
    linkauthorized?: any,
}

const Burger = ({ networks, link, button, linkauthorized }: StandardComponentProps) => {
    const burger: any = useAuthStore((state: any) => (state.isBurger))
    const isSignedIn = useAuthStore((state: any) => (state.isSignedIn))
    const isMint = useAuthStore((state: any) => (state.isMint))

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

    // user
    const token = useAuthStore((state: any) => (state.token))
    const profileChange = useAuthStore((state: any) => (state.profileChange))

    const [dataUserNew, setDataUserNew]: any = useState()

    useEffect(() => {
        if (!token) { return }
        const FetchData = async (token: any) => {
            const dataUser = await useUserFetch('api/crypto-user/', token)
            return dataUser
        }
        const fetchDataAndLog = async () => {
            const result = await FetchData(token);
            setDataUserNew(result)
        };
        fetchDataAndLog()
    }, [token, profileChange])
    return (
        <>
            <div className={`${style.stub} ${burger ? style.stubActive : ''}`} onClick={() => useAuthStore.setState({ isBurger: false })}></div>
            <div className={`${style.wrapperBurger} ${burger ? style.wrapperBurgerActive : ''}`} >
                <WrapperTexture>
                    {
                        isSignedIn &&
                        <div className={style.avatar}>
                            <img src={dataUserNew?.user.avatar ? `https://api.realmofhistoria.com/${dataUserNew?.user.avatar}` : '/ooui_user-avatar.png'} width={38} height={38} />
                        </div>
                    }
                    <div className={style.link}>
                        {/* <Link href='/user/personal'><p>My Profile</p></Link>
                <Link href='/lobby'><p>3d Lobby</p></Link>
                <Link href='/marketplace'><p>Marketplace</p></Link>
                <Link href='/artists'><p>Artists</p></Link> */}
                        {
                            isSignedIn ?
                                <>
                                    {
                                        linkauthorized?.map((_: any, i: number) => (
                                            <Link key={i + 3233} href={_.href || '/'}><p>{_.name}</p></Link>
                                        ))
                                    }
                                </>
                                :
                                <>
                                    {
                                        link?.map((_: any, i: number) => (
                                            <Link key={i + 321} href={_.href || '/'}><p>{_.name}</p></Link>
                                        ))
                                    }
                                </>
                        }
                        {
                            isSignedIn &&
                            <p onClick={unLogIn}>Log Out</p>
                        }
                    </div>
                    <Link href='/mint'><button className={style.button}>{button}</button></Link>
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