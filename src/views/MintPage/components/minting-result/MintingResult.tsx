import { MintingResult } from '../../types/create_mint'
import styles from './styles.module.css'
import { useEffect } from "react"


export default function MintingResultDisplay({ mintedNfts, signatures, successCount, txsCount }: MintingResult) {

    useEffect(() => console.log(signatures), [])

    return (
        <>
        <p>Successfull mints: {successCount.toString()}/{txsCount.toString()}</p>
        <p>Transactions list logged in console</p>
        <p>Minted NFTs:</p>
        <div className={styles.nfts}>
        {
            mintedNfts.map(n => (
                <div
                className={styles.nft}
                key={n.mint.publicKey}
                >
                    <img src={n.imageUrl}/>
                    <p>{n.metadata.name}</p>
                </div>
            ))
        }
        </div>
        </>
    )
}