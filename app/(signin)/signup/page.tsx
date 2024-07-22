"use client";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/PasswordInput";
import EmailInput from "@/app/components/EmailInput";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCred) => {
        const user = userCred.user;
        await sendEmailVerification(user);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
  };

  const handleGoogle = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
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
        <button className="btn btn-neutral" onClick={(e) => handleSubmit(e)}>
          Sign Up
        </button>
      </div>

      <div className="divider">Or</div>

      <GoogleButton text="Sign In With Google" onClick={handleGoogle}/>

      <Link href="/login">Already Have An Account? Login</Link>
    </div>
  );
};

export default SignUp;
