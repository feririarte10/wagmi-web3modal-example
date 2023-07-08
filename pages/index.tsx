import { useWeb3Modal } from "@web3modal/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { open } = useWeb3Modal();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={open}>Connect wallet</button>
    </main>
  );
}
