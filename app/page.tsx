import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Integrate from "./components/Integrate";
import Why from "./components/Why";

export default function Home() {
  return (
    <main >
      <div className="py-10 px-32">
        <Hero />
        <Integrate />
      </div>
      <Why />
    </main>
  );
}
