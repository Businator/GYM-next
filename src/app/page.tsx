import { Hero } from "./components/hero/Hero";
import { Footer } from "'@/components/UI/footer/Footer'";
import { About } from "./components/about/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
