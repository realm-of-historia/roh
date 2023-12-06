import { Web3Auth } from "@web3auth/modal";
import { SolanaWalletAdapter } from "@web3auth/torus-solana-adapter";

const authConfig = new Web3Auth({
    clientId: "BBPcXBN_LFqrWooUTwEUkKH4CwvXTaxAV44R0sRNXKE-iCBlV69siQ6o1gFGnzYMgpKe2DuMc9kIwI1FfUIaV_M", //Нужен ли слеш в конце?
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
    clientId: "BBPcXBN_LFqrWooUTwEUkKH4CwvXTaxAV44R0sRNXKE-iCBlV69siQ6o1gFGnzYMgpKe2DuMc9kIwI1FfUIaV_M",
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