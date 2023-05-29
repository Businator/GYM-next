import React, { useState } from "react";
import { Menu, MenuItem, MenuList, SxProps, capitalize } from "@mui/material";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { MessengerAndSearchMenu } from "../MessengerAndSearchMenu/MessengerAndSearchMenu";

import styles from "./MobileMenu.module.scss";

const menuStyle = {
  "& .MuiBackdrop-root": {
    background:
      "linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(0,0,0,0.6010416666666667) 50%, rgba(23,23,23,1) 100%)",
  },
  "& .MuiMenu-paper": {
    width: 150,
    height: 250,
    backgroundColor: "#D6FD51",
    boxShadow: "0px 0px 60px 0px #D6FD51",
  },
} as SxProps;

export const MobileMenu = ({
  pageList,
}: {
  pageList: {
    name: string;
    href: string;
  }[];
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Menu
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        open={openMenu}
        onClick={() => setOpenMenu((prev) => !prev)}
        sx={menuStyle}
      >
        <MenuList>
          {pageList.map((page) => {
            return (
              <MenuItem key={page.name}>
                <Link href={page.href}>{capitalize(page.name)}</Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <div className={styles.buttonContainer}>
        <button onClick={() => setOpenMenu((prev) => !prev)}>
          <AiOutlineMenu />
        </button>
        <MessengerAndSearchMenu />
      </div>
    </>
  );
};
