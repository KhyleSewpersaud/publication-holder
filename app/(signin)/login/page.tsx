"use client";
import React from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import { useState } from "react";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/PasswordInput";
import EmailInput from "@/app/components/EmailInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginButton = () => {
    console.log("hello");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Login</h2>

      <EmailInput email={email} setEmail={setEmail} />

      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        toggleShowPassword={togglePasswordVisibility}
      />

      <button className="btn btn-neutral" onClick={handleLoginButton}>
        Login
      </button>
      <div className="divider">Or</div>

      <GoogleButton text="Login With Google" />

      <Link href="/signup">No Account? Sign Up</Link>
    </div>
  );
};

export default Login;
