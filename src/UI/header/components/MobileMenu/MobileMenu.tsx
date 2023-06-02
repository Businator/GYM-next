import React, { useState, useEffect } from "react";
import { Menu, MenuItem, MenuList, SxProps, capitalize } from "@mui/material";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Switches } from "../Switches/Switches";
import styles from "./MobileMenu.module.scss";
import clsx from "clsx";
import { navigation } from "../../Header";

const menuStyle = {
  "& .MuiBackdrop-root": {
    background:
      "linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(0,0,0,0.6010416666666667) 50%, rgba(23,23,23,1) 100%)",
  },
  "& .MuiMenu-paper": {
    width: 150,
    backgroundColor: "#D6FD51",
    boxShadow: "0px 0px 60px 0px #D6FD51",
  },
} as SxProps;

export const MobileMenu = ({ pages }: { pages?: navigation }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [element, setElement] = useState(null as unknown as HTMLElement);

  useEffect(() => {
    document.body && setElement(document.body);
  }, []);

  return (
    <>
      <Menu
        anchorEl={element}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        open={openMenu}
        onClick={(event) =>
          event.target === document.querySelector(".MuiBackdrop-root") &&
          setOpenMenu((prev) => !prev)
        }
        sx={menuStyle}
      >
        <MenuList>
          {pages && (
            <nav
              className={clsx(
                styles.navigation,
                document.documentElement.scrollWidth < 768 && styles.active
              )}
            >
              {pages.map((page) => {
                return (
                  <MenuItem key={page.name}>
                    <Link href={page.href}>{capitalize(page.name)}</Link>
                  </MenuItem>
                );
              })}
            </nav>
          )}

          <Switches />
        </MenuList>
      </Menu>
      <div className={styles.buttonContainer}>
        <button onClick={() => setOpenMenu((prev) => !prev)}>
          <AiOutlineMenu />
        </button>
      </div>
    </>
  );
};
