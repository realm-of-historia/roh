import { getUmi } from "../lib/common";
import { PublicKey } from "@metaplex-foundation/umi";
import { fetchAllDigitalAssetByOwner, fetchDigitalAsset } from "@metaplex-foundation/mpl-token-metadata";
import { NftWithImage } from "../types/nft";

export async function getAllNftsByOwner (owner: PublicKey) {
    const umi = getUmi()
    
    const tokens = await fetchAllDigitalAssetByOwner(umi, owner, { tokenAmountFilter: (amount) => amount.toString() === '1' })

    return tokens
}

export async function getNftByMint (mint: PublicKey) {
    const umi = getUmi()

    const token = await fetchDigitalAsset(umi, mint)

    const uriDetails = await fetch(token.metadata.uri).then(r => r.json())
                
    return {
        ...token,
        imageUrl: uriDetails.image || ''
    } as NftWithImage
}

export async function getNftsByOwnerFilteredByCollection (owner: PublicKey, nftCollection: PublicKey) {
    const tokens = await getAllNftsByOwner(owner)
    .then(t => t.filter(t => t.metadata.collection.__option === "Some" && t.metadata.collection.value.verified && t.metadata.collection.value.key === nftCollection))

    return Promise.all(
        tokens.map(async (tkn) => {
            const uriDetails = await fetch(tkn.metadata.uri).then(r => r.json())
            
            return {
                ...tkn,
                imageUrl: uriDetails.image || ''
            } as NftWithImage
        })
    )
}