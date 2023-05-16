import React from "react";
import { integral, openSans } from "../../../../public/styles/fonts";
import { Button } from "'@/components/UI/button/Button'";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <h1 className={`text-5xl text-center ${integral.className}`}>
        WORK WITH <br /> PROFFESOINALS
      </h1>
      <p className={`${openSans.className} text-center text-gray-200`}>
        Achieve your goals and become the best version of yourself
      </p>
      <div className="flex items-center gap-8">
        <Button>START NOW</Button>
        <Link className={integral.className} href={"/about"}>
          Learn more
        </Link>
      </div>
      <div className="flex gap-4">
        <button>Left</button>
        <button>Right</button>
      </div>
    </>
  );
};
