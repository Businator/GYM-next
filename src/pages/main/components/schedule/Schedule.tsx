"use client";

import { TableContainer, Table } from "@mui/material";
import React from "react";
import { THead } from "./component/THead";
import { TBody } from "./component/TBody";
import { Button } from "'@/components/UI/button/Button'";

import style from "./Schedule.module.scss";

export const Schedule = () => {
  return (
    <section className={style.shedule}>
      <TableContainer>
        <Table>
          <THead />
          <TBody />
        </Table>
      </TableContainer>
      <Button>VIEW MORE</Button>
    </section>
  );
};
