"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/PasswordInput";
import EmailInput from "@/app/components/EmailInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/lib/firebase/firebase"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    try {
      e.preventDefault
      const res = await signInWithEmailAndPassword(auth, email, password)
      setEmail("")
      setPassword("")
      console.log('success')
    } catch (error) {
      console.log(error)
    }
  }

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

      <button className="btn btn-neutral" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
      <div className="divider">Or</div>

      <GoogleButton text="Login With Google" />

      <Link href="/signup">No Account? Sign Up</Link>
    </div>
  );
};

export default Login;
