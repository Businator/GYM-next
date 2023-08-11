import { StaticImageData } from "next/image";
import thor from "../assets/images/Thor.jpg";
import capitanAmerica from "../assets/images/Capitan-America.jpg";
import superman from "../assets/images/Sups.jpg";
import capitanMarvel from "../assets/images/Capitan-Marvel.jpeg";
import widow from "../assets/images/Widow.jpeg";
import wonderWoman from "../assets/images/Wonder-woman.jpeg";

export type Coach = {
  id: number;
  name: string;
  img: StaticImageData;
  spec: string;
};

export const coachesList = [
  {
    id: 1,
    name: "Thor",
    img: thor,
    spec: "crossfit",
  },
  {
    id: 2,
    name: "Wonder Woman",
    img: wonderWoman,
    spec: "crossfit",
  },
  {
    id: 3,
    name: "Superman",
    img: superman,
    spec: "powerlifting",
  },
  {
    id: 4,
    name: "Black Widow",
    img: widow,
    spec: "stretching",
  },

  {
    id: 5,
    name: "Capitan Marvel",
    img: capitanMarvel,
    spec: "open gym",
  },
  {
    id: 6,
    name: "Capitan America",
    img: capitanAmerica,
    spec: "crossfit",
  },
];
