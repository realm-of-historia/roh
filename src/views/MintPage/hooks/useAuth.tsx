import { umiSignerFromWeb3AuthWallet } from "../lib/utils";
import { Signer } from "@metaplex-foundation/umi";
import { IProvider } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";
import { useEffect, useState } from "react";
import authConfig from "@/authConfig/authConfig";


export function useAuth () {
    const [provider, setProvider] = useState<IProvider | null>(null)
    const [signer, setSigner] = useState<Signer | null>(null)
    
    const auth = async () => {
        setProvider(null)

        const provider = await authConfig.connect()

        setProvider(provider)
        extendModal()

        return provider
    }

    const getSigner = async () => {
        setSigner(null)
        if (provider) {
            console.log(provider)
            const solanaWallet = new SolanaWallet(provider)
            const accounts = await solanaWallet.requestAccounts()

            if (accounts[0]) {
                const solanaAddress = accounts[0]
                const umiSigner = umiSignerFromWeb3AuthWallet(solanaWallet, solanaAddress)

                setSigner(umiSigner)
            }
        }
    }

    const extendModal = () => {
        setTimeout(() => {
            let image_icon: any = document.querySelector(".w3a-button--primary img");
            // let image_iconHover : any = document.querySelector(".w3a-button--primary :nth-child(2)");
            let image_iconH: any = document.querySelector(".w3a-button--primary :nth-child(2)");
            let image_iconH2: any = document.querySelector(".w3a-button--primary :nth-child(1)");
            let subtitle: any = document.querySelector(".w3a-header__subtitle");
            let input: any = document.querySelector(".w3a-text-field");
            let cross: any = document.querySelector(".w3ajs-close-btn img");
            if (!image_icon && !image_iconH && !subtitle && !input && !cross) { return }
            image_icon.src = '/fsVww.svg'
            // image_iconHover.src = '/fsVww.svg'
            image_iconH.src = image_iconH2.src
            subtitle.innerText = 'Embark on a journey of discovery.'
            input.placeholder = 'name@example.com'
            cross.src = '/radix-icons_cross-1.svg'
            console.log(cross)
        
        
          }, 1)
    }

    useEffect(() => {
        getSigner()
    }, [provider])
    
    return { authConfig, auth, signer }
      
}