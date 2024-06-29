import MainBody from "@/components/main-body";
import SignedOutPage from "@/components/sign-out-page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 ">
      <div className="flex flex-col w-full h-fit relative items-center justify-items-center">
        {/* <div className="w-full"> */}
          <MainBody />
        {/* </div> */}
      </div>
    </main>
  );
}
