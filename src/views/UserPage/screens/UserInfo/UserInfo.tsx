'use client'
// import React, { useEffect, useRef } from 'react'
import styles from './UserInfo.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import Divider from '@/components/Divider/Divider'
import { useEffect, useState } from 'react'
import { useUserFetch } from '@/composable/useApiFetch'
import { useAuthStore } from '@/store/store'
import { useWindowSize, useWindowWidth } from '@react-hook/window-size'


export default function UserInfo({ lineFirst, lineSecond,  }: { lineFirst?: number, lineSecond?: number }) {

    // const compilationRefFirst: any = useRef(null)
    // const compilationRefSecond: any = useRef(null)


    // useEffect(() => {
    //     // compilationRefFirst.current.style.width = `${lineFirst}%`
    //     // compilationRefSecond.current.style.width = `${lineSecond}%`
    // })
    const token = useAuthStore((state: any) => (state.token))
    const profileChange = useAuthStore((state: any) => (state.profileChange))

    const walletAdress = useAuthStore((state: any) => (state.profileWalletAdress))
    const [splitedWallet, setSplittedWallet] = useState<any>()


    const width = useWindowWidth()


    const [data, setData]: any = useState()


    useEffect(() => {
        if(walletAdress) {
            const splited = walletAdress.split('')
            setSplittedWallet(splited)
            console.log(splited[-3])
        }
    }, [walletAdress])


    const handleCopy = (text: any) => {
        let textarea = document.createElement('textarea');
        textarea.value = text;
      
        document.body.appendChild(textarea);
      
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
      
        document.execCommand('copy');
      
        document.body.removeChild(textarea);
    }

    useEffect(() => {
        if (!token) { return }
        const FetchData = async (token: any) => {
            const dataUser = await useUserFetch('api/crypto-user/', token)
            return dataUser
        }
        const fetchDataAndLog = async () => {
            const result = await FetchData(token);
            setData(result)
        };
        fetchDataAndLog()
    }, [token, profileChange])
    const contacts = [
        {
            name: 'Email',
            title: 'vasya.pupkin@1507.io',
        },
        {
            name: 'Newsletter',
            title: 'Allowed / Not allowed',
        }
    ]

    // console.log(data, 'fdasfas')

    return (
        <div className={styles.userInfo}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={data?.user.avatar ? `https://api.realmofhistoria.com/${data?.user.avatar}` : '/ooui_user-avatar.png'} width={363} height={363} alt='' />
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <div className={styles.first}>
                                <p className={styles.name}>
                                    { data?.user.name || data?.user.surname ? data?.user.name + ' ' + data?.user.surname : data?.user.wallet.substr(0, 10)}
                                </p>
                                <div className={styles.verification}>
                                    <div><p>Steward of Historia / Traveller / Hand of Historia</p></div>
                                </div>
                                <div className={styles.wallet}>
                                    <p>
                                        Profile wallet address:
                                    </p>
                                    <p onClick={width < 576 ? () => handleCopy(walletAdress): () => {}}>
                                        {splitedWallet ? (splitedWallet[0] + splitedWallet[1] + splitedWallet[2] + splitedWallet[3] + '...' + splitedWallet[splitedWallet.length - 1] + splitedWallet[splitedWallet.length - 2] + splitedWallet[splitedWallet.length - 3] + splitedWallet[splitedWallet.length - 4]) : ''}
                                    </p>
                                    <div className={styles.copyBut} onClick={() => handleCopy(walletAdress)}>
                                        Copy
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.progress}>
                            <div className={styles.first}>
                                <div>
                                    <p>
                                        Profile compleation
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        {lineFirst}%
                                    </p>
                                </div>
                            </div>
                            <div className={styles.line}>
                                <div ref={compilationRefFirst} className={styles.leftLine}></div>
                                <div ref={compilationRefSecond} className={styles.rightLine}></div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className={styles.bottom}>
                        <div className={styles.section}>
                            <div className={styles.profit}>
                                <div><Icon label='arrow-down'></Icon></div>
                                <div><p>$4.500</p></div>
                            </div>
                            <p className={styles.cost}>total cost</p>
                        </div>
                        <Divider position={'top right'}></Divider>
                        <div className={styles.section}>
                            <div className={styles.profit}>
                                <div><Icon label='arrow-up'></Icon></div>
                                <div><p>80</p></div>
                            </div>
                            <p className={styles.cost}>NFT&apos;S</p>
                        </div>
                    </div> */}
                    <div className={styles.contactsUser}>
                        {/* {
                            contacts.map((_ : any, i : number) => (
                                <div key={i + 9923101} className={styles.wrapperInfoContacts}>
                                    <p>{_.name}</p>
                                    <p>{_.title}</p>
                                </div>
                            ))
                        } */}
                        {
                            data?.user.email &&
                            <div className={styles.wrapperInfoContacts}>
                                <p>Email</p>
                                <p>{data?.user.email}</p>
                            </div>
                        }
                            <div className={styles.wrapperInfoContacts}>
                                <p>Newsletter</p>
                                <p>{data?.user.allow_marketing ? 'Allowed' : 'Not allowed'}</p>
                            </div>

                    </div>
                </div>
            </div>
            {/* <div className={styles.bottomSecond}>
                <div className={styles.section}>
                    <div className={styles.profit}>
                        <div><Icon label='arrow-down'></Icon></div>
                        <div><p>$4.500</p></div>
                    </div>
                    <p className={styles.cost}>total cost</p>
                </div>
                <Divider position={'top right'}></Divider>
                <div className={styles.section}>
                    <div className={styles.profit}>
                        <div><Icon label='arrow-up'></Icon></div>
                        <div><p>80</p></div>
                    </div>
                    <p className={styles.cost}>NFT&apos;S</p>
                </div>
            </div> */}
        </div>
    )
}