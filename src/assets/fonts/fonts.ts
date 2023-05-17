import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

const integral = localFont({
  src: "../fonts/IntegralCF-Medium.woff2",
});

const openSans = Open_Sans({ subsets: ["cyrillic", "latin"] });

export { integral, openSans };
