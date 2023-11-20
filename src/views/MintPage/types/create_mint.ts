import { CandyPhase } from "./candy_info"
import { NftWithImage } from "./nft"
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata"
import { KeypairSigner, PublicKey, Transaction, TransactionBuilder } from "@metaplex-foundation/umi"

export type CreateMintTransactionParams = {
    nftBurn?: {
        mint?: PublicKey,
        tokenStandard?: TokenStandard
    },
    selectedPhase?: CandyPhase
}

export type MintTransaction = {
    tx: TransactionBuilder,
    mint: KeypairSigner
}

export type MintingResult = {
    txsCount: number,
    successCount: number,
    signatures: string[],
    mintedNfts: NftWithImage[]
}