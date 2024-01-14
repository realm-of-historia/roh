import { PublicKey } from '@solana/web3.js'
import { getCandyMachineId, getMplClientDepr } from '../lib/common'

export async function fetchCandyDepr () {
    const client = getMplClientDepr()
    const candyId = getCandyMachineId()

    const candy = await client.candyMachines().findByAddress({ address: new PublicKey(candyId) })

    return candy
}