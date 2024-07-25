"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/textinputs/PasswordInput";
import EmailInput from "@/app/components/textinputs/EmailInput";
import { HandleLoginSubmit, googleLogin } from "@/lib/authSubmit";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { handleLoginSubmit } = HandleLoginSubmit()

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

      <p>{loginError}</p>

      <button
        className="btn btn-neutral"
        onClick={(e) =>
          handleLoginSubmit(
            email,
            password,
            setEmail,
            setPassword,
            e,
            setLoginError
          )
        }
      >
        Login
      </button>
      <div className="divider">Or</div>

      <GoogleButton
        text="Login With Google"
        onClick={(e) => {
          googleLogin(e);
        }}
      />

      <Link href="/signup">No Account? Sign Up</Link>
      <Link href="/login/forgot">Forgot Password?</Link>
    </div>
  );
};

export default Login;
