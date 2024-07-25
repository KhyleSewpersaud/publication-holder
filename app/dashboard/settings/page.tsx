"use client";
import React, { useEffect, useState } from "react";
import { HandleSignout } from "@/lib/authSubmit";
import { auth } from "@/lib/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import EmailAcc from "@/app/components/dashsettings/emailAcc";
import GoogleAcc from "@/app/components/dashsettings/googleAcc";

const Settings = () => {
  const [accountType, setAccountType] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const {signoutPress} = HandleSignout()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setAccountType(
        user?.providerData[0].providerId === "google.com" ? "google" : "email"
      );
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-1/2 rounded-lg p-20">
        {accountType === "email" && <EmailAcc user={user}/>}
        {accountType === "google" && <GoogleAcc user={user}/>}
        <div className="flex justify-center">
          <button onClick={signoutPress} className="btn btn-neutral">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
