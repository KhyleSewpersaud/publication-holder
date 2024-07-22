"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/PasswordInput";
import EmailInput from "@/app/components/EmailInput";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        const user = userCred.user;
        setEmail("");
        setPassword("");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleGoogle = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
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

      <button className="btn btn-neutral" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
      <div className="divider">Or</div>

      <GoogleButton text="Login With Google" onClick={handleGoogle} />

      <Link href="/signup">No Account? Sign Up</Link>
      <Link href="/login/forgot">Forgot Password?</Link>
    </div>
  );
};

export default Login;
