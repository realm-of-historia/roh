import { CandyGuard, CandyMachine, DefaultGuardSet, NftBurn, TokenPayment } from "@metaplex-foundation/mpl-candy-machine"
import { PublicKey } from "@metaplex-foundation/umi"
import { CandyMachine as CandyMachineDepr, DefaultCandyGuardSettings, NftBurnGuardSettings, TokenPaymentGuardSettings } from "@metaplex-foundation/js"
import { PublicKey as Web3Pubkey } from "@solana/web3.js"

export type FullCandyDetailsDepr = CandyMachineDepr<DefaultCandyGuardSettings>

export type CandyPhase = {
    group: string | null
}

export type CandyCurrentPhaseSettings = {
    nftBurn: NftBurn | null,
    tokenPayment: TokenPayment | null,
    solPayment: PublicKey | null
}

export type CandyCurrentPhaseSettingsDepr = {
    nftBurn: NftBurnGuardSettings | null,
    tokenPayment: TokenPaymentGuardSettings | null,
    solPayment: Web3Pubkey | null
}