import { Button } from "'@/components/UI/button/Button'";
import { Logo } from "'@/components/UI/logo/Logo'";
import Image from "next/image";
import Link from "next/link";
import { integral } from "../../public/styles/fonts";

export default function Home() {
  return (
    <section className="bg-hero">
      <header className="flex gap-4">
        <Logo />
        <ul className="flex gap-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/App"}>App</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>
        <ul className="flex gap-2">
          <li>Search</li>
          <li>Message</li>
        </ul>
      </header>
      <main>
        <h1 className={integral.className}>WORK WITH PROFFESOINALS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          architecto inventore nihil sint accusamus fugiat, aut ducimus
          perferendis cupiditate eum vitae ratione, repudiandae, error quas
          doloremque. Ex soluta eius sequi.
        </p>
        <Button>START NOW</Button>
        <Link className={integral.className} href={"/about"}>
          Learn more
        </Link>
        <div>
          <button>Left</button>
          <button>Right</button>
        </div>
      </main>
    </section>
  );
}
