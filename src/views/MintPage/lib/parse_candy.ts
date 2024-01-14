import { NftBurnGuardSettings, TokenPaymentGuardSettings } from "@metaplex-foundation/js";
import { PublicKey as Web3Pubkey } from "@solana/web3.js";
import { CandyCurrentPhaseSettingsDepr, CandyPhase, FullCandyDetailsDepr } from "../types/candy_info";

export function determineCandyElligiblePhasesDepr (details: FullCandyDetailsDepr): CandyPhase[] {
    const candy = details
    const guard = candy.candyGuard!
    
    const phases: CandyPhase[] = []
    const currentTime = Date.now() / 1000

    // Check guard groups
    if (guard.groups.length > 0) {
        guard.groups.forEach(g => {
            let elligible = true

            if (g.guards.startDate && Number(g.guards.startDate.date.toString()) > currentTime) elligible = false
            if (g.guards.endDate && Number(g.guards.endDate.date.toString()) < currentTime) elligible = false
            if (g.guards.redeemedAmount && Number(g.guards.redeemedAmount.maximum.toString()) > Number(candy.itemsRemaining.toString())) elligible = false

            if (elligible) {
                phases.push({ group: g.label })
            }
        })
    // If no guard groups check global
    } else {
        let elligible = true

        if (guard.guards.startDate && Number(guard.guards.startDate.date.toString()) > currentTime) elligible = false
        if (guard.guards.endDate && Number(guard.guards.endDate.date.toString()) < currentTime) elligible = false
        if (guard.guards.redeemedAmount && Number(guard.guards.redeemedAmount.maximum.toString()) > Number(candy.itemsRemaining.toString())) elligible = false

        if (elligible) {
            phases.push({ group: null })
        }
    }

    return phases
}

export function getCurrentPhaseSettingsDepr (details: FullCandyDetailsDepr, currentPhase: CandyPhase): CandyCurrentPhaseSettingsDepr {
    const guard = details.candyGuard!

    let nftBurn: NftBurnGuardSettings | null = null
    let tokenPayment: TokenPaymentGuardSettings | null = null
    let solPayment: Web3Pubkey | null = null
    
    if (guard.guards.nftBurn !== null) {
        nftBurn = guard.guards.nftBurn
    }
    if (guard.guards.tokenPayment !== null) {
        tokenPayment = guard.guards.tokenPayment
    }
    if (guard.guards.solPayment !== null) {
        solPayment = guard.guards.solPayment.destination
    }

    if (currentPhase.group !== null) {
        const matchingGroup = guard.groups.find(g => g.label === currentPhase.group)

        if (matchingGroup) {
            if (matchingGroup.guards.nftBurn !== null) {
                nftBurn = matchingGroup.guards.nftBurn
            }    
            if (matchingGroup.guards.tokenPayment !== null) {
                tokenPayment = matchingGroup.guards.tokenPayment
            }
            if (matchingGroup.guards.solPayment !== null) {
                solPayment = matchingGroup.guards.solPayment.destination
            }
        }
    }

    return {
        nftBurn,
        tokenPayment,
        solPayment
    }

}