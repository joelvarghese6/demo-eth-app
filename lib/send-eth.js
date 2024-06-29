import { ethers, parseEther, getAddress } from "ethers";
import toast from "react-hot-toast";

export async function startPayment({ setError, setTxs, ether, addr }) {
  let loadingId;
  try {
    loadingId = toast.loading("Loading...");
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: parseEther(ether),
    });
    //console.log()
    toast.dismiss(loadingId);
    toast.success(
      <div className="flex flex-col justify-center items-center">
        <span>Transaction submitted</span>
        <a
          className="text-stone-900"
          href={`https://sepolia.etherscan.io/tx/${tx.hash}`}
          target="_blank"
        >
          Click to view on etherscan
        </a>
      </div>, {
        duration: 5000
      }
    );
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
    console.log(err);
    toast.dismiss(loadingId);
    toast.error("Something wrong happened")
  }
}
