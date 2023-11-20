import { Web3Auth } from "@web3auth/modal";


const authConfig = new Web3Auth({
    clientId: "BKaIFcYud_TYQJBpWkTV_H7CE7wMzpH0n5bK0Fn8LahgXeQwawPF4bHK8bvRKf6JDne1xyKi-v9-QDmggrVGWcY", //Нужен ли слеш в конце?)
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