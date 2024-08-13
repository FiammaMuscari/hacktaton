import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import Layout from "./components/Layout";

export function App() {
  return (
    <main className="p-4    bg-custom-gradient  text-center">
      <div className="py-20">
        <Header />
        <ThirdwebResources />
        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example app",
              url: "https://example.com",
            }}
          />
        </div>
        <div className="my-4">
          <div>Please connect your wallet</div>
        </div>
      </div>

      <Layout />
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <section className="relative">
        <h1 className="text-[#3498DB] text-[48px] font-bold">agora</h1>
        <h4 className="absolute top-[3rem] right-0 text-white">ONCHAIN</h4>
      </section>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="  gap-4 lg:grid-cols-3 justify-center">
      <section className="text-center my-[1rem]">
        <h1 className="text-2xl md:text-6xl font-bold  text-[28px]">
          Your opinion matters
        </h1>
        <p className="text-[18px]">Please select one option and confirm</p>
        <h2 className="text-zinc-300 text-base">
          Which project will we finance?
        </h2>
      </section>
    </div>
  );
}
