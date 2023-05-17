import { Hero } from "./components/hero/Hero";
import { Footer } from "'@/components/UI/footer/Footer'";
import { About } from "./components/about/About";
import { Choose } from "./components/choose/Choose";

export default function Home() {
  return (
    <>
      <Hero />
      <Choose />
      <About />
      <Footer />
    </>
  );
}
