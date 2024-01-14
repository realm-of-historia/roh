import { CandyPhase } from "./candy_info"
import { NftWithImage } from "./nft"
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata"
import { KeypairSigner, PublicKey, TransactionBuilder } from "@metaplex-foundation/umi"
import { Keypair, Transaction } from "@solana/web3.js"

export type CreateMintTransactionParams = {
    nftBurn?: {
        mint?: PublicKey,
        tokenStandard?: TokenStandard
    },
    selectedPhase?: CandyPhase
}

export type MintTransactionDepr = {
    tx: Transaction,
    mint: Keypair
}

export type MintingResult = {
    txsCount: number,
    successCount: number,
    signatures: string[],
    mintedNfts: NftWithImage[]
}