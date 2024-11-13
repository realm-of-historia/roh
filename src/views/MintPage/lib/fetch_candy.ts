import { getCandyMachineId, getUmi } from '../lib/common'
import { fetchCandyGuard, fetchCandyMachine } from '@metaplex-foundation/mpl-candy-machine'

export async function fetchCandy () {
    const umi = getUmi()
    const candyId = getCandyMachineId()
    
    const candy = await fetchCandyMachine(umi, candyId)
    const guard = await fetchCandyGuard(umi, candy.mintAuthority)

    return { candy, guard }
}