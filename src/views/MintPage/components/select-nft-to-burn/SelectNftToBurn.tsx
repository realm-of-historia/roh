import { getNftsByOwnerFilteredByCollection } from "../../lib/fetch_nfts"
import { umiPubkeyFromWalletAdapterPubkey } from "../../lib/utils"
import { NftWithImage } from "../../types/nft"
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata"
import { PublicKey } from "@metaplex-foundation/umi"
import { useState } from "react"
import styles from './styles.module.css'

type Props = {
    nftCollection: PublicKey,
    onSelect: (nft: PublicKey, tokenStandard?: TokenStandard) => any,
    selected?: (PublicKey | undefined)[],
    userPubkey?: PublicKey
}

export default function SelectNftToBurn({ nftCollection, onSelect, selected, userPubkey }: Props) {

    const [availableNfts, setAvailableNfts] = useState<NftWithImage[] | null>(null)

    const onLoadNfts = async () => {
        if (!userPubkey) return
        // load nfts to burn 
        await getNftsByOwnerFilteredByCollection(userPubkey, nftCollection)
        .then(n => setAvailableNfts(n))
    }

    return (
        <>
        {
            availableNfts === null
            ?
            <button className={styles.button} onClick={onLoadNfts}>Select NFT to Burn</button>
            :
            null
        }
        <div className={styles.nfts}>
        {
            availableNfts?.map(n => (
                <div
                className={styles.nft + ' ' + (selected?.includes(n.mint.publicKey) ? styles.selected : '')}
                onClick={() => onSelect(n.mint.publicKey, n.metadata.tokenStandard.__option === "Some" ? n.metadata.tokenStandard.value : undefined)}
                key={n.mint.publicKey}>
                    <img src={n.imageUrl}/>
                    <p>{n.metadata.name}</p>
                </div>
            ))
        }
        </div>
        </>
    )
}