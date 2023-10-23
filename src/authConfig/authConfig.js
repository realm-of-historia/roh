import { Web3Auth } from "@web3auth/modal";


const authConfig = new Web3Auth({
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

export default authConfig;