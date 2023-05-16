import { Button } from "'@/components/UI/button/Button'";
import Link from "next/link";
import { integral, openSans } from "../../public/styles/fonts";
import { Header } from "'@/components/UI/header/Header'";
import { Hero } from "./components/hero/Hero";
import { Footer } from "'@/components/UI/footer/Footer'";

export default function Home() {
  return (
    <>
      <div className="bg-hero-img bg-hero-position bg-no-repeat h-[600px] w-full">
        <div className="bg-hero-gradient h-full w-full flex flex-col items-center justify-between gap-y-36">
          <Header />
          <main className="max-w-7xl flex flex-col items-center gap-y-4">
            <Hero />
          </main>
          <div
            className={`${integral.className} w-full text-center bg-acid-green text-black py-1`}
          >
            DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFFESSIONAL
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
