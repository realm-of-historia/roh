import { Web3Auth } from "@web3auth/modal";
import { SolanaWalletAdapter } from "@web3auth/torus-solana-adapter";

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

  const solanaWalletAdapter = new SolanaWalletAdapter({
    adapterSettings: {
      modalZIndex: 99999,
    },
    loginSettings: {
      loginProvider: "google",
    },
    initParams: {
      buildEnv: "testing",
    },
    chainConfig: {
      chainNamespace: "solana",
      rpcTarget: "https://api.mainnet-beta.solana.com",
      blockExplorer: "https://explorer.solana.com",
      chainId: "0x1",
      displayName: "Solana Mainnet Beta",
      ticker: "sol",
      tickerName: "solana",
    },
    clientId: "BKaIFcYud_TYQJBpWkTV_H7CE7wMzpH0n5bK0Fn8LahgXeQwawPF4bHK8bvRKf6JDne1xyKi-v9-QDmggrVGWcY",
    sessionTime: 3600,
    web3AuthNetwork: "sapphire_mainnet",
  });
  
  authConfig.configureAdapter(solanaWalletAdapter);

  
  solanaWalletAdapter.setAdapterSettings({
    sessionTime: 86400,
    chainConfig: {
      chainNamespace: "solana",
      chainId: "0x1",
      rpcTarget: "https://api.mainnet-beta.solana.com",
    },
    web3AuthNetwork: "sapphire_mainnet",
  });

export default authConfig;