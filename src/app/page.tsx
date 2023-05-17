import { Button } from "'@/components/UI/button/Button'";
import Link from "next/link";
import { integral, openSans } from "../../public/styles/fonts";
import { Header } from "'@/components/UI/header/Header'";
import { Hero } from "./components/hero/Hero";
import { Footer } from "'@/components/UI/footer/Footer'";

export default function Home() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
