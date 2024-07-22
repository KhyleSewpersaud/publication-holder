"use client";
import React from "react";
import { auth } from "@/lib/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();
  const handleSignout = async (e: React.MouseEvent<HTMLElement>) => {
    await signOut(auth)
      .then(() => {
        console.log("signed out");
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <button onClick={(e) => handleSignout(e)}>Sign out</button>
    </div>
  );
};

export default Settings;
