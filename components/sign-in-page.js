import { useRef, useState } from "react";
import Modal from "./modal";
import { isAddress } from "web3-validator";
import toast from "react-hot-toast";
import Image from "next/image";
import ethlogo from "@/public/images/ethereumlogo.png";

export default function SignedInPage() {
  const [walletAddress, setWalletAddress] = useState("");
  const modal = useRef();

  function openPage() {
    if (!isAddress(walletAddress)) {
      toast.error("Invalid address");
      return;
    }

    modal.current.open();
  }

  function handleValChange(e) {
    setWalletAddress(e.target.value);
  }

  return (
    <>
      <Modal ref={modal} walletaddr={walletAddress} />
      <div className="flex flex-col items-center w-full justify-center">
        {/* <p className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-center lg:text-left max-w-[350px] lg:max-w-[600px] leading-tight">
          Send ETH to Wallet
        </p> */}
        <Image src={ethlogo} width={300} height={300} alt="eth icon"/>
        <div className="flex justify-center p-4 mt-8 gap-2 w-full">
          <input
            placeholder="Enter the wallet address"
            className="rounded-md bg-[#040A33] h-10 border-[1px] w-1/2 p-2 sm-min-w"
            type="text"
            value={walletAddress}
            onChange={handleValChange}
          />

          <button
            onClick={openPage}
            className="flex justify-center items-center rounded-md px-4 text-xl hover:text-2xl font-semibold"
          >
            {"->"}
          </button>
        </div>
      </div>
      <footer className="flex flex-col justify-center mt-16 items-center">
        <strong>Disclaimer:</strong>
        <p className="text-center">
          Please ensure that you enter a valid wallet ID. Failure to do so may
          result in transaction errors or loss of funds. If you have any
          questions, please contact our support team.
        </p>
      </footer>
    </>
  );
}
