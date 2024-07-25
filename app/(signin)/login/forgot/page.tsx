"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { resetPassword } from "@/lib/authSubmit";

const Forgot = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={(e) => resetPassword(email, setEmail)}>
        Send Reset Password Link
      </button>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Forgot;
