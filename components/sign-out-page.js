import data from "@/public/ether.json";
import Image from "next/image";
import ethlogo from "@/public/images/ethereumlogo.png";

export default function SignedOutPage({ handleSignin }) {
  return (
    <div className="container p-4 flex flex-col lg:flex-row justify-between items-center relative w-full h-full">
      <div className="flex flex-col items-center justify-center lg:items-start z-10 min-w-[50%] md:mt-8">
        <p className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-center lg:text-left max-w-[350px] lg:max-w-[600px] leading-tight">
          Send ETH to Wallet
        </p>
        <p className="text-center lg:text-left mt-2 opacity-80 max-w-[500px] lg:max-w-[450px]">
          connect your wallet and send testnet ETH to any wallet
        </p>
        <div className="flex flex-row">
          <button
            className="mt-4 p-2 px-6 rounded-lg bg-[#1227CA]"
            onClick={handleSignin}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 w-full">
        <Image src={ethlogo} width={500} height={500} alt="eth logo"/>
      </div>
    </div>
  );
}
