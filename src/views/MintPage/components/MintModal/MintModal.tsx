import { useAuthStore } from '@/store/store'
import styles from './MintModal.module.scss'

export default function MintModal() {

    const handleClose = () => {
        useAuthStore.setState({mintModalVisible: false})
    }

    return (
        <div className={styles.modal}>
            <p className={styles.title}>
                Welcome to Realm
            </p>
            <picture>
                <img src='/modalImage.png'/>
            </picture>
            <p className={styles.info}>
                Your purchase is complete
            </p>
            <button className={styles.solan}>
                View on Solsan
            </button>
            <button className={styles.realm} onClick={handleClose}>
                My Realm
            </button>
        </div>
    )
}