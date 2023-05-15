import localFont from "next/font/local";
import { Inter } from "next/font/google";

const integral = localFont({
  src: "../fonts/IntegralCF-Medium.woff2",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
});

export { integral, inter };
