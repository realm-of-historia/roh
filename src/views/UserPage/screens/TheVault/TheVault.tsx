'use client'
import CarahungeX from '@/components/CollectionsComponents/CarahungeX/CarahungeX'
import style from './TheVault.module.scss'
import { useEffect, useState } from 'react'
import TheVaultTable from './components/TheVaultTable'

const TheVault = () => {
    const dataCarahungeX ={
            header: 'Carahunge x',
            date: 'Mint on Aug 11, 2023',
            button: 'Show more',
    }
    const [active, setActive] : any = useState(false)
    let funActive = () => {
        setActive(true)
    }
    console.log(active)
    const dataTheVaultTable = {
        title: 'Title',
        description: 'Description',
        link: 'Link',
        table: [
            {
                name: 'Bible',
                description: '4 A.D. - Jesus Christ - Book - Religion',
                link: 'Download',
                href: '/'
            },
            {
                name: 'Bible',
                description: '4 A.D. - Jesus Christ - Book - Religion',
                link: 'Download',
                href: '/'
            },
            {
                name: 'Bible',
                description: '4 A.D. - Jesus Christ - Book - Religion',
                link: 'Download',
                href: '/'
            },
        ]
    }
    return (
        <div>
            {
                !active ?
                    <CarahungeX data={dataCarahungeX} fun={funActive}/>
                :
                <TheVaultTable data={dataTheVaultTable}/>

            }
        </div>
    )
}

export default TheVault