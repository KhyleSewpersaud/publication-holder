"use client";
import GoogleButton from "@/app/components/GoogleButton";
import PasswordInput from "@/app/components/PasswordInput";
import EmailInput from "@/app/components/EmailInput";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignupButton = async () => {
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User created successfully!");
      } 
      catch (error) {
        let errorMessage;
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/email-already-in-use":
            errorMessage = "Email already in use.";
            break;
          case "auth/weak-password":
            errorMessage = "Password should be at least 6 characters.";
            break;
          default:
            errorMessage = "An error occurred. Please try again.";
            break;
        }
        alert(errorMessage);
      }
    } else {
      alert("Passwords do not match");
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

      <button className="btn btn-neutral" onClick={handleSignupButton}>
        Sign Up
      </button>

      <div className="divider">Or</div>

      <GoogleButton text="Sign In With Google" />

      <Link href="/login">Already Have An Account? Login</Link>
    </div>
  );
};

export default SignUp;
