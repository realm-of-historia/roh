import { CandyPhase, CandyCurrentPhaseSettings, FullCandyDetails } from "../types/candy_info";
import { CandyGuard, DefaultGuardSet, NftBurn, TokenPayment } from "@metaplex-foundation/mpl-candy-machine";
import { PublicKey } from "@metaplex-foundation/umi";


export function determineCandyElligiblePhases (details: FullCandyDetails): CandyPhase[] {
    const { candy, guard } = details
    
    const phases: CandyPhase[] = []
    const currentTime = Date.now() / 1000

    // Check guard groups
    if (guard.groups.length > 0) {
        guard.groups.forEach(g => {
            let elligible = true

            if (g.guards.startDate.__option === "Some" && Number(g.guards.startDate.value.date.toString()) > currentTime) elligible = false
            if (g.guards.endDate.__option === "Some" && Number(g.guards.endDate.value.date.toString()) < currentTime) elligible = false
            if (g.guards.redeemedAmount.__option === "Some" && Number(g.guards.redeemedAmount.value.maximum.toString()) > Number(candy.itemsRedeemed.toString())) elligible = false

            if (elligible) {
                phases.push({ group: g.label })
            }
        })
    // If no guard groups check global
    } else {
        let elligible = true

        if (guard.guards.startDate.__option === "Some" && Number(guard.guards.startDate.value.date.toString()) > currentTime) elligible = false
        if (guard.guards.endDate.__option === "Some" && Number(guard.guards.endDate.value.date.toString()) < currentTime) elligible = false
        if (guard.guards.redeemedAmount.__option === "Some" && Number(guard.guards.redeemedAmount.value.maximum.toString()) > Number(candy.itemsRedeemed.toString())) elligible = false

        if (elligible) {
            phases.push({ group: null })
        }
    }

    return phases
}

export function getCurrentPhaseSettings (guard: CandyGuard<DefaultGuardSet>, currentPhase: CandyPhase): CandyCurrentPhaseSettings {

    let nftBurn: NftBurn | null = null
    let tokenPayment: TokenPayment | null = null
    let solPayment: PublicKey | null = null
    
    if (guard.guards.nftBurn.__option === "Some") {
        nftBurn = guard.guards.nftBurn.value
    }
    if (guard.guards.tokenPayment.__option === "Some") {
        tokenPayment = guard.guards.tokenPayment.value
    }
    if (guard.guards.solPayment.__option === "Some") {
        solPayment = guard.guards.solPayment.value.destination
    }

    if (currentPhase.group !== null) {
        const matchingGroup = guard.groups.find(g => g.label === currentPhase.group)

        if (matchingGroup) {
            if (matchingGroup.guards.nftBurn.__option === "Some") {
                nftBurn = matchingGroup.guards.nftBurn.value
            }    
            if (matchingGroup.guards.tokenPayment.__option === "Some") {
                tokenPayment = matchingGroup.guards.tokenPayment.value
            }
            if (matchingGroup.guards.solPayment.__option === "Some") {
                solPayment = matchingGroup.guards.solPayment.value.destination
            }
        }
    }

    return {
        nftBurn,
        tokenPayment,
        solPayment
    }

}