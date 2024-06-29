"use client";

import { useState } from "react";
import SignedInPage from "./sign-in-page";
import SignedOutPage from "./sign-out-page";
import toast from "react-hot-toast";

export default function MainBody({ params }) {
  const [isSignedin, setIsSignedin] = useState(false);

  function handleAuthChange() {
    if (!window.ethereum) {
      toast.error("MetaMask wallet not found");
      return;
    }
    setIsSignedin(true);
  }
  //console.log(params);
  return (
    <>
      {isSignedin ? (
        <SignedInPage />
      ) : (
        <SignedOutPage handleSignin={handleAuthChange} />
      )}
    </>
  );
}
