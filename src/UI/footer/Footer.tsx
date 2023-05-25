import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";

import styles from "./Footer.module.scss";
import { Logo } from "../logo/Logo";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Logo />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          odio mollitia voluptate?
        </p>
        <ul>
          <li>
            <a href="">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="">
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <h4>About</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Vacancy</li>
          </ul>
        </li>
        <li>
          <h4>Services</h4>
          <ul>
            <li>How to work</li>
            <li>Works</li>
            <li>Price</li>
          </ul>
        </li>
        <li>
          <h4>Support</h4>
          <ul>
            <li>Contact us</li>
            <li>Our channel</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </li>
        <li>
          <h4>FAQ</h4>
          <ul>
            <li>Payment</li>
            <li>Monthly day</li>
            <li>Work time</li>
            <li>More</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};
