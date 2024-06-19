import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/Frame 198.png"

const Hero = () => {
  return (
    <header className="flex justify-between">
      <div className="flex flex-col w-1/2">
        <h1 className="font-black text-7xl mb-5">Represent Your Research</h1>
        <p className="my-5 text-lg">Easily integrate your Google Scholar publications to your website</p>
        <Link href="/demo" className="btn btn-neutral w-1/4 my-5">See How</Link>
      </div>
      <div className="flex justify-center w-1/2">
        <Image src={HeroImage} width={350} alt="Sample Publication Widget" />
      </div>
    </header>
  );
};

export default Hero;
