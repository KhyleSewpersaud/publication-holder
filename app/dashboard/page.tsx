import React from "react";
import MakeWidget from "../components/widget/MakeWidget";
import { auth } from "@/lib/firebase/firebase";
import { Linden_Hill } from "next/font/google";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center mt-5 mb-16">
        <Link href="dashboard/settings" className="btn">
          Go to User Settings
        </Link>
      </div>

      <div className="">
        <MakeWidget />
      </div>
    </div>
  );
};

export default Dashboard;
