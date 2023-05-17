import React from "react";

import thor from "./assets/Thor.jpg";
import capitanAmerica from "./assets/Capitan-America.jpg";
import superman from "./assets/Sups.jpg";
import capitanMarvel from "./assets/Capitan-Marvel.jpeg";
import widow from "./assets/Widow.jpeg";
import wonderWoman from "./assets/Wonder-woman.jpeg";
import Image from "next/image";

import styles from "./Coaches.module.scss";
import { integral } from "'@/assets/fonts/fonts'";

export const Coaches = () => {
  return (
    <section>
      <h2 className={integral.className}>OUR BEST COACHES</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        voluptate atque sapiente quia.
      </p>
      <div className={styles.container}>
        <div>
          <Image src={thor} alt="Thor" />
          <p>CROSSFIT COACH</p>
        </div>
        <div>
          <Image src={capitanAmerica} alt="Capitan America" />
          <p>CROSSFIT COACH</p>
        </div>
        <div>
          <Image src={superman} alt="Superman" />
          <p>CROSSFIT COACH</p>
        </div>
        <div>
          <Image src={wonderWoman} alt="Wonder Woman" />
          <p>CROSSFIT COACH</p>
        </div>
      </div>
    </section>
  );
};
