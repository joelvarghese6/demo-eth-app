"use client";

import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";
import { isAddress } from "web3-validator";
import { startPayment } from "@/lib/send-eth";
import Link from "next/link";

const Modal = forwardRef(function Modal({ walletaddr }, ref) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const dialog = useRef();

  function cancelTrx () {
    dialog.current.close();
  }

  async function handleSubmit(e) {
    //dialog.current.close()
    //setIsDisabled(true);
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      addr: walletaddr,
      ether: formData.get("ether"),
    };

    if (isAddress(data.addr) && data.ether > 0) {
      await startPayment({
        setError,
        setTxs,
        ether: data.ether,
        addr: data.addr,
      });
    } else {
      toast.error("Invalid input")
    }
    console.log(data)
    

    // toast.promise(response, {
    //   loading: "Loading",
    //   success: (
    //     <div className="flex flex-col justify-center items-center">
    //       <span>Transaction submitted</span>
    //       <a
    //         className="text-stone-900"
    //         href="https://sepolia.etherscan.io/tx/0x028aeca85716c3331c0f37a285f1b10e6e325482b4bb704d7decf1773451c8f0"
    //         target="_blank"
    //       >
    //         Click to view on etherscan
    //       </a>
    //     </div>
    //   ),
    //   error: 'Something happened'
    // }, {
    //   success: {
    //     duration: 4000
    //   }
    // });
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="w-full backdrop:bg-stone-900/90 p-4 rounded-xl shadow-md md:w-1/3 bg-[#020519]"
    >
      <div className="flex justify-end items-center text-white">
        <button onClick={cancelTrx}>
          &#10006;
        </button>
      </div>

      <Toaster />
      <form className="m-4" onSubmit={handleSubmit}>
        <main className="mt-4 p-4">
          <h2 className="text-md font-semibold text-gray-700 text-center">
            Send ETH payment
          </h2>
          <div className="">
            <div className="my-3">
              <input
                id="addr"
                type="text"
                name="addr"
                className="w-full rounded-md bg-[#040A33] h-10 border-[1px] border-[#060F4C] p-2 text-white"
                placeholder="Recipient Address"
                value={walletaddr}
                disabled
              />
            </div>
            <div className="my-3">
              <input
                id="ether"
                name="ether"
                type="number"
                step="any"
                className="w-full rounded-md bg-[#040A33] h-10 border-[1px] border-[#060F4C] p-2 text-white"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4 flex items-center justify-center ">
          <button
            type="submit"
            className="p-2 rounded-md text-white bg-[#1227ca]"
            //onClick={handleSubmit}
            disabled={isDisabled}
          >
            {isDisabled ? "Sending..." : "Send ETH"}
          </button>
        </footer>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
