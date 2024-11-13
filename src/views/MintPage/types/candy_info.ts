import { CandyGuard, CandyMachine, DefaultGuardSet, NftBurn, TokenPayment } from "@metaplex-foundation/mpl-candy-machine"
import { PublicKey } from "@metaplex-foundation/umi"


export type FullCandyDetails = {
    candy: CandyMachine,
    guard: CandyGuard<DefaultGuardSet>
}

export type CandyPhase = {
    group: string | null
}

export type CandyCurrentPhaseSettings = {
    nftBurn: NftBurn | null,
    tokenPayment: TokenPayment | null,
    solPayment: PublicKey | null
}