'use client'

import React, { useEffect } from "react";
import { Web3Auth } from "@web3auth/modal";

export default function page() {

    const web3auth = new Web3Auth({
        clientId: "BNp5UoHfpmNPl3rTCr5nk0Zngu7pujmwHfbadxhT3qUuN-dinTIamU41bcN0Di02_kmqXL7xbAorbooV59ud2-U",
        web3AuthNetwork: "sapphire_devnet",
        chainConfig: {
          chainNamespace: "solana",
          chainId: "0x1",
          rpcTarget: "https://api.devnet.solana.com",
          displayName: "Solana Mainnet",
          blockExplorer: "https://explorer.solana.com/",
          ticker: "SOL",
          tickerName: "Solana",
        },
        uiConfig: {
            loginMethodsOrder: ["facebook", "google"],
          },
      });



      useEffect(() => {
        web3auth.initModal();
      }, [])

    const logIn = () => {
        console.log('gdfsgsa')
        web3auth.connect();
        console.log(web3auth.connected)
      }

      const unLogIn = () => {
        if(web3auth.connected){
            web3auth.logout();
            console.log(web3auth.connected)
        } else{
            console.log('disconnected')
        }
      }

    return(
        
        <div>
            <button onClick={logIn}>Connect</button>
            <button onClick={unLogIn}>Disconnect</button>
        </div>
    )
}