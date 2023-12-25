import { Web3Auth } from "@web3auth/modal";
import { SolanaWalletAdapter } from "@web3auth/torus-solana-adapter";


const authConfig = new Web3Auth({
    clientId: `BMcoOQok7hg-gWsra7Dzu54GyiXVuLIVhehUFupyMeWegfd4cOqjjgAkKt4F0IU8r9g2Y3icnY6269m587tH2EI`,
    web3AuthNetwork: "sapphire_mainnet",
    chainConfig: {
      chainNamespace: "solana",
      chainId: "0x1",
      rpcTarget: "https://shy-solitary-reel.solana-mainnet.quiknode.pro/faaf277bca95610594e2729c04e56108d1710543/",
      displayName: "Solana Mainnet",
      blockExplorer: "https://explorer.solana.com/",
      ticker: "SOL",
      tickerName: "Solana",
    },
    uiConfig: {
        loginMethodsOrder: ["google", "twitter", "discord", "facebook"],
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
    clientId: `BMcoOQok7hg-gWsra7Dzu54GyiXVuLIVhehUFupyMeWegfd4cOqjjgAkKt4F0IU8r9g2Y3icnY6269m587tH2EI`,
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