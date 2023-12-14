import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine'
import { Signer, publicKey, signerIdentity } from '@metaplex-foundation/umi'


export function getRpcUrl () {
    console.log(process.env.NEXT_PUBLIC_RPC_URL)
    if (!process.env.NEXT_PUBLIC_RPC_URL) {
        throw new Error('No RPC URL')
    }
    return process.env.NEXT_PUBLIC_RPC_URL
}

export function getUmi () {
    return createUmi(getRpcUrl()).use(mplCandyMachine())
}

export function getUmiWithSigner (signer: Signer) {
    if (!process.env.NEXT_PUBLIC_RPC_URL) {
        throw new Error('No RPC URL')
    }
    return createUmi(getRpcUrl()).use(mplCandyMachine()).use(signerIdentity(signer))
}

export function getCandyMachineId () {
    if (!process.env.NEXT_PUBLIC_CANDY_MACHINE_ID) {
        throw new Error('No candy machine id')
    }
    return publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID)
}