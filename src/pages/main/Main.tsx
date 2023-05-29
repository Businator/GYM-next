import { Footer } from "'@/UI/footer/Footer'";
import { About } from "./components/about/About";
import { Choose } from "./components/choose/Choose";
import { Coaches } from "./components/coaches/Coaches";
import { Hero } from "./components/hero/Hero";
import { Schedule } from "./components/schedule/Schedule";
import girlsImg from "./assets/image/girls.jpg";
import Image from "next/image";
import { Passes } from "./components/passes/Passes";
import { Reviews } from "./components/reviews/Reviews";
import { News } from "./components/news/News";
import { Trial } from "./components/trial/Trial";
import styles from "./Main.module.scss";

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
      <Passes />
      <Reviews />
      {/*       <News />
       */}{" "}
      <Trial />
      <Footer />
    </>
  );
}
