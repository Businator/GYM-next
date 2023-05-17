import { Hero } from "./components/hero/Hero";
import { Footer } from "'@/components/footer/Footer'";
import { About } from "./components/about/About";
import { Choose } from "./components/choose/Choose";

export default function Main() {
  return (
    <>
      <Hero />
      <Choose />
      <About />
      <Footer />
    </>
  );
}
