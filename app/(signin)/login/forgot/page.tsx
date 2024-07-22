"use client";
import React from "react";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import Link from "next/link";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const resetPassword = (e: React.MouseEvent<HTMLElement>) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail("")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
  };

  return (
    <div>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={(e) => resetPassword(e)}>
        Send Reset Password Link
      </button>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Forgot;
