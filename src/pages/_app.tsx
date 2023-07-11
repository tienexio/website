import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../styles/theme";
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bscTestnet, mainnet, optimism, polygon, localhost, bsc } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config";
import { ToastContainer } from 'react-toastify';

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
const chains = [];
const jzfLocalhost= {
  id: 1337,
  name: "Localhost",
  network: "localhost",
  nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
  },
  rpcUrls: {
      default: {
          http: ["http://192.168.43.119:8545"],
      },
      public: {
          http: ["http://192.168.43.119:8545"],
      },
  },
};
switch (process.env.NEXT_PUBLIC_NETWORK!) {
  case 'localhost':
    chains.push(localhost);
    break;
    case 'jzflocalhost':
    chains.push(jzfLocalhost);
    break;
  case 'testnet':
    chains.push(bscTestnet);
    break;
  case 'mainnet':
    chains.push(bsc);
    break;
  default:
    break;
}

const { publicClient } = configureChains(chains, [
  w3mProvider({ projectId }),
  jsonRpcProvider({
    rpc: (chain) => ({
      http: process.env.NEXT_PUBLIC_RPC ?? chain.rpcUrls.default.http[0],
    }),
  }),
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  publicClient,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          {/* <ChakraProvider theme={theme}> */}
            <Component {...pageProps} />
          {/* </ChakraProvider> */}
        </WagmiConfig>
      ) : null}

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      
      {/* toast */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);