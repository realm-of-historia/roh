import { publicKey } from "@metaplex-foundation/umi";
import { createSignerFromWalletAdapter } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { SolanaWallet } from "@web3auth/solana-provider";

export function umiSignerFromWeb3AuthWallet (solanaWallet: SolanaWallet, solanaAddress: string) {
    return createSignerFromWalletAdapter({
        publicKey: new PublicKey(solanaAddress),
        signAllTransactions: solanaWallet.signAllTransactions,
        signMessage: solanaWallet.signMessage,
        signTransaction: solanaWallet.signTransaction
    })
}

export function umiSignerFromSolanaWalletAdapter (walletAdapter: WalletContextState) {
    return createSignerFromWalletAdapter(walletAdapter)
}

export function umiPubkeyFromWalletAdapterPubkey (pubkey: PublicKey) {
    console.log(pubkey)
    return publicKey(pubkey)
}