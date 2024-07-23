"use client";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/textinputs/PasswordInput";
import EmailInput from "@/app/components/textinputs/EmailInput";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { handleSignupSubmit, googleLogin } from "@/lib/authSubmit";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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
          onClick={(e) =>
            handleSignupSubmit(
              email,
              password,
              confirmPassword,
              setEmail,
              setPassword,
              setConfirmPassword,
              e
            )
          }
        >
          Sign Up
        </button>
      </div>

      <div className="divider">Or</div>

      <GoogleButton text="Sign In With Google" onClick={(e) => googleLogin(e)} />

      <Link href="/login">Already Have An Account? Login</Link>
    </div>
  );
};

export default SignUp;
