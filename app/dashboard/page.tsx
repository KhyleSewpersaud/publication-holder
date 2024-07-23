import React from "react";
import MakeWidget from "../components/widget/MakeWidget";
import { auth } from "@/lib/firebase/firebase";
import { Linden_Hill } from "next/font/google";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <MakeWidget />
      <Link href="dashboard/settings">Go to User Settings</Link>
    </div>
  );
};

export default Dashboard;
