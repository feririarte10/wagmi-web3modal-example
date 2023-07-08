import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { config, ethereumClient, projectId } from "@/src/context/wagmi";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />

      <Web3Modal
        themeMode="dark"
        themeVariables={{
          "--w3m-font-family": "Inter, sans-serif",
          "--w3m-background-border-radius": "4px",
          "--w3m-container-border-radius": "0",
          "--w3m-background-color": "#151515",
          "--w3m-accent-color": "#007aff",
          "--w3m-accent-fill-color": "#fff",
          "--w3m-overlay-background-color": "rgba(0, 0, 0, 0.6)",
          "--w3m-button-hover-highlight-border-radius": "4px",
          "--w3m-overlay-backdrop-filter": "blur(3px)",
          "--w3m-wallet-icon-border-radius": "4px",
          "--w3m-wallet-icon-large-border-radius": "4px",
          "--w3m-wallet-icon-small-border-radius": "4px",
        }}
        projectId={projectId}
        ethereumClient={ethereumClient}
        enableAccountView={false}
      />
    </WagmiConfig>
  );
}
