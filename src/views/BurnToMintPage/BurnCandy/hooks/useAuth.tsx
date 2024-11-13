import { umiSignerFromWeb3AuthWallet } from "../lib/utils";
import { Signer } from "@metaplex-foundation/umi";
import { IProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";
import { useEffect, useState } from "react";
import authConfig from "@/authConfig/authConfig";
import { useAuthStore } from "@/store/store";


export function useAuth () {
    const [provider, setProvider] = useState<IProvider | null>(null)
    const [signer, setSigner] = useState<Signer | null>(null)

    const auth = async () => {
        setProvider(null)

        const provider = await authConfig.connect()


        setProvider(provider)

        return provider
    }

    const getSigner = async () => {
        setSigner(null)
        if (provider) {
            const solanaWallet = new SolanaWallet(provider)


            const accounts = await solanaWallet.requestAccounts()


            if (accounts[0]) {
                const solanaAddress = accounts[0]


                const umiSigner = umiSignerFromWeb3AuthWallet(solanaWallet, solanaAddress)

                setSigner(umiSigner)


                useAuthStore.setState({profileWalletAdress: umiSigner.publicKey, profileSigner: umiSigner})
            }


            const signedMessage = await signMessage()

            useAuthStore.setState({signedMessage: signedMessage})

        }
    }

    const signMessage = async () => {
        if(provider) {
            const solanaWallet = new SolanaWallet(provider)

            const msgBase = 'AUTH' 
            const roundMs = 300000

            const msg: string = msgBase + (Math.ceil(Date.now() / roundMs) * roundMs).toString();

            const buffer = Buffer.from(msg, 'utf-8')

            const message = new Uint8Array(buffer);

            const res = await solanaWallet.signMessage(message);
    
            return res;
        }
    }

    useEffect(() => {
        getSigner()
    }, [provider])
    
    return { authConfig, auth, signer }
      
}