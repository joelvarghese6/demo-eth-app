import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to EthSwift",
  description: "EthSwift allows a user to send testnet eth to another eth wallet address",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div id="modal-root"></div>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
