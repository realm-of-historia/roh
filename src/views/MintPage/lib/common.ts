import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplCandyMachine } from '@metaplex-foundation/mpl-candy-machine'
import { Signer, publicKey, signerIdentity } from '@metaplex-foundation/umi'
import { Metaplex, walletAdapterIdentity } from '@metaplex-foundation/js'
import { Connection } from '@solana/web3.js'
import { WalletContextState } from '@solana/wallet-adapter-react'

export function getRpcUrl () {
    if (!process.env.NEXT_PUBLIC_RPC_URL) {
        throw new Error('No RPC URL')
    }
    return process.env.NEXT_PUBLIC_RPC_URL
}

export function getUmi () {
    return createUmi(getRpcUrl()).use(mplCandyMachine())
}

export function getCandyMachineId () {
    if (!process.env.NEXT_PUBLIC_CANDY_MACHINE_ID) {
        throw new Error('No candy machine id')
    }
    return publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID)
}

export function getMplClientDepr () {
    return Metaplex.make(new Connection(getRpcUrl()))
}

export function getMplClientDeprWithSigner (walletAdapter: WalletContextState) {
    return Metaplex.make(new Connection(getRpcUrl())).use(walletAdapterIdentity(walletAdapter))
}