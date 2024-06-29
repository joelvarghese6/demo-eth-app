import Link from "next/link";
import Image from "next/image";
import ethlogo from "@/public/images/ethereumlogo.png";

export default function MainHeader() {
  return (
    <div className="container w-full p-4 bg-[#020519] border-b border-[#21222D] sticky top-0">
      <Link href="/" className="flex items-starts gap-2">
        <Image src={ethlogo} width={50} height={50} alt="logo"/>
        <h1 className="text-3xl font-semibold text-[#fff] hover:text-stone-400">
          EthSwift
        </h1>
      </Link>
    </div>
  );
}
