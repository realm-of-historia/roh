import { Web3Auth } from "@web3auth/modal";


const authConfig = new Web3Auth({
    clientId: "BBPcXBN_LFqrWooUTwEUkKH4CwvXTaxAV44R0sRNXKE-iCBlV69siQ6o1gFGnzYMgpKe2DuMc9kIwI1FfUIaV_M", //Нужен ли слеш в конце?)
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