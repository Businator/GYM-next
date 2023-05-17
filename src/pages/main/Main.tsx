import { Footer } from "'@/components/footer/Footer'";
import { About } from "./components/about/About";
import { Choose } from "./components/choose/Choose";
import { Coaches } from "./components/coaches/Coaches";
import { Hero } from "./components/hero/Hero";

export default function Main() {
  return (
    <>
      <Hero />
      <Choose />
      <About />
      <Coaches />
      <Footer />
    </>
  );
}
