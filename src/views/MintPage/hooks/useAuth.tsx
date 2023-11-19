import { umiSignerFromWeb3AuthWallet } from "../lib/utils";
import { Signer } from "@metaplex-foundation/umi";
import { IProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { SolanaWallet } from "@web3auth/solana-provider";
import { useEffect, useState } from "react";
import authConfig from "@/authConfig/authConfig";


export function useAuth () {
    const [provider, setProvider] = useState<IProvider | null>(null)
    const [signer, setSigner] = useState<Signer | null>(null)

    // const web3Auth = new Web3Auth({
    //     clientId: "BECOf8psLK3O0coBCUH3ExYKSckPN1mLqPM4Pbg8fxaGlm1kpEhNncDDdtGuyH8-ba_nHhXdMzVWAGgYQcun9mA",
    //     web3AuthNetwork: "sapphire_mainnet",
    //     chainConfig: {
    //       chainNamespace: "solana",
    //       chainId: "0x1",
    //       rpcTarget: "https://api.devnet.solana.com",
    //       displayName: "Solana Devnet",
    //       blockExplorer: "https://explorer.solana.com/",
    //       ticker: "SOL",
    //       tickerName: "Solana",
    //     }
    // })
    
    const auth = async () => {
        setProvider(null)

        const provider = await authConfig.connect()

        console.log(provider)

        setProvider(provider)

        return provider
    }

    const getSigner = async () => {
        setSigner(null)
        if (provider) {
            console.log(provider)
            const solanaWallet = new SolanaWallet(provider)
            const accounts = await solanaWallet.requestAccounts()

            console.log(solanaWallet)
            if (accounts[0]) {
                const solanaAddress = accounts[0]
                const umiSigner = umiSignerFromWeb3AuthWallet(solanaWallet, solanaAddress)
                setSigner(umiSigner)
            }
        }
    }

    useEffect(() => {
        getSigner()
    }, [provider])
    
    return { authConfig, auth, signer }
      
}