"use client";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/PasswordInput";
import EmailInput from "@/app/components/EmailInput";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    try {
      e.preventDefault;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Sign Up</h2>

      <EmailInput email={email} setEmail={setEmail} />

      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        toggleShowPassword={togglePasswordVisibility}
      />

      <PasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        showPassword={showConfirmPassword}
        toggleShowPassword={toggleConfirmPasswordVisibility}
      />

      <div className="flex justify-center">
        <button
          className="btn btn-neutral"
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
        </button>
      </div>

      <div className="divider">Or</div>

      <GoogleButton text="Sign In With Google" />

      <Link href="/login">Already Have An Account? Login</Link>
    </div>
  );
};

export default SignUp;
