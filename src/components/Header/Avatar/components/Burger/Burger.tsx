"use client"
import { useMemo } from 'react'
import style from './Burger.module.scss'
import { useAuthStore } from '@/store/store'
import Link from 'next/link'
import authConfig from '@/authConfig/authConfig'
import ImageMy from '@/components/Image/ImageMy'
import Divider from '@/components/Divider/Divider'

export interface StandardComponentProps {
    networks?: any,
}

const Burger = ({ networks }: StandardComponentProps) => {
    const burger: any = useAuthStore((state: any) => (state.isBurger))
    const styleBurger = useMemo(() => {
        const styles: any = {
            opacity: burger ? '1' : '0',
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }
        return styles
    }, [burger])
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
        <div className={style.wrapperBurger} style={styleBurger}>
            <div className={style.avatar}>
                <img src='/Avatar.png' width={38} height={38} />
            </div>
            <div className={style.link}>
                <Link href='/user/personal'><p>My Profile</p></Link>
                <Link href='/lobby'><p>3d Lobby</p></Link>
                <Link href='/marketplace'><p>Marketplace</p></Link>
                <Link href='/artists'><p>Artists</p></Link>
                <p onClick={unLogIn}>Log Out</p>
            </div>
            <button className={style.button}>Buy</button>
            <div className={style.network}>
                {
                    networks?.map((_: any, i: number) => (
                        <div onClick={() => handler(_.href)} className={style.iconHeader}>
                            <ImageMy src={_.icon.data.attributes.url} width={24} height={24} alt='' />
                            <Divider position={'right top'} />
                            <Divider position={'left top'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Burger