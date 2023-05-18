import { Footer } from "'@/components/footer/Footer'";
import { About } from "./components/about/About";
import { Choose } from "./components/choose/Choose";
import { Coaches } from "./components/coaches/Coaches";
import { Hero } from "./components/hero/Hero";
import { Schedule } from "./components/schedule/Schedule";
import girlsImg from "./assets/image/girls.jpg";
import Image from "next/image";

import styles from "./assets/styles/Main.module.scss";

export default function Main() {
  return (
    <>
      <Hero />
      <Choose />
      <About />
      <Coaches />
      <Schedule />
      <Image
        src={girlsImg}
        alt="girls pump their abs"
        className={styles.girlsImg}
      />
      <Footer />
    </>
  );
}
