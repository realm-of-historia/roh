'use client';

import { getRpcUrl } from "@/views/MintPage/lib/common";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PropsWithChildren, useMemo } from "react";


export default function MintProvider({children}: {children: any}) {

    const endpoint = useMemo(getRpcUrl, [])


    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}