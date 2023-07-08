import { configureChains, createConfig, mainnet } from "wagmi";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

export const projectId: string = "YOUR_PROJECT_ID"; //process.env.WC_PROJECT_ID

const chains = [mainnet];

const { publicClient, webSocketPublicClient } = configureChains(chains, [
  w3mProvider({ projectId }),
]);

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    projectId,
    chains,
  }),
  publicClient,
  webSocketPublicClient,
});

export const ethereumClient = new EthereumClient(config, chains);
