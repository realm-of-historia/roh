import { useAuthStore } from '@/store/store'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import Link from 'next/link'
import styles from './MintModal.module.scss'

export default function MintModal({publicKey}: {publicKey: string}) {

    const handleClose = () => {
        useAuthStore.setState({mintModalVisible: false})
    }

    const network = process.env.NEXT_PUBLIC_NETWORK === 'devnet' ? WalletAdapterNetwork.Devnet :
    process.env.NEXT_PUBLIC_NETWORK === 'testnet' ? WalletAdapterNetwork.Testnet :
    WalletAdapterNetwork.Mainnet;

    console.log(publicKey)

    const link = `https://solscan.io/token/${publicKey}${network === 'devnet' ? '?cluster=devnet' : ''}`

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <svg onClick={handleClose} className={styles.cross} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2446_522)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6801 1.86444C23.7815 1.76302 23.862 1.64262 23.9169 1.51011C23.9718 1.37761 24 1.23559 24 1.09216C24 0.948737 23.9718 0.806717 23.9169 0.67421C23.862 0.541702 23.7815 0.421303 23.6801 0.319886C23.5787 0.21847 23.4583 0.138022 23.3258 0.0831359C23.1933 0.0282497 23.0513 0 22.9078 0C22.7644 0 22.6224 0.0282497 22.4899 0.0831359C22.3574 0.138022 22.237 0.21847 22.1356 0.319886L12 10.4576L1.86444 0.319886C1.76302 0.21847 1.64262 0.138022 1.51011 0.0831359C1.37761 0.0282497 1.23559 1.0686e-09 1.09216 0C0.948737 -1.0686e-09 0.806717 0.0282497 0.67421 0.0831359C0.541702 0.138022 0.421303 0.21847 0.319886 0.319886C0.21847 0.421303 0.138022 0.541702 0.0831359 0.67421C0.0282497 0.806717 -1.0686e-09 0.948737 0 1.09216C1.0686e-09 1.23559 0.0282497 1.37761 0.0831359 1.51011C0.138022 1.64262 0.21847 1.76302 0.319886 1.86444L10.4576 12L0.319886 22.1356C0.115066 22.3404 0 22.6182 0 22.9078C0 23.1975 0.115066 23.4753 0.319886 23.6801C0.524707 23.8849 0.802502 24 1.09216 24C1.38182 24 1.65962 23.8849 1.86444 23.6801L12 13.5424L22.1356 23.6801C22.3404 23.8849 22.6182 24 22.9078 24C23.1975 24 23.4753 23.8849 23.6801 23.6801C23.8849 23.4753 24 23.1975 24 22.9078C24 22.6182 23.8849 22.3404 23.6801 22.1356L13.5424 12L23.6801 1.86444Z" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2446_522">
                    <rect width="24" height="24" fill="currentColor"/>
                    </clipPath>
                    </defs>
                </svg>
                <p className={styles.title}>
                    Welcome to Realm
                </p>
                <picture>
                    <img src='/modalImage.png'/>
                </picture>
                <p className={styles.info}>
                    Your purchase is complete
                </p>
                <Link href={link}>
                    <button className={styles.solan}>
                        View on Solsan
                    </button>
                </Link>
                <Link href='/user/my-realm' onClick={handleClose}>
                    <button className={styles.realm}>
                        My Realm
                    </button>
                </Link>
            </div>
        </div>
    )
}