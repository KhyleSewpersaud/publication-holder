import React from "react";
import Image from "next/image";
import Temp from "../../public/temp.png";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between py-16 px-32">
      <div>
        <Image src={Temp} width={50} alt="Logo" />
      </div>
      <div className="flex justify-center font-bold text-lg">
        <div className="flex w-full mr-24">
          <Link href="/" className="mx-5">Home</Link>
          <Link href="/demo" className="mx-5">Demo</Link>
          <Link href="/pricing" className="mx-5">Pricing</Link>
        </div>

        <div className="font-bold text-lg">
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
