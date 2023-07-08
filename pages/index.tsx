import { useWeb3Modal } from "@web3modal/react";
import { Inter } from "next/font/google";
import { useAccount } from "wagmi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {!isConnected ? (
        <button onClick={open}>Connect wallet</button>
      ) : (
        <>
          <p>Welcome, ${address}</p>
        </>
      )}
    </main>
  );
}
