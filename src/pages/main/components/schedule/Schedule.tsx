"use client";

import { TableContainer, Table } from "@mui/material";
import React from "react";
import { THead } from "./component/THead";
import { TBody } from "./component/TBody";
import { Button } from "'@/UI/button/Button'";

import style from "./Schedule.module.scss";
import { Section } from "../section/Section";

export const Schedule = () => {
  return (
    <Section className={style.shedule}>
      <TableContainer>
        <Table>
          <THead />
          <TBody />
        </Table>
      </TableContainer>
      <Button>VIEW MORE</Button>
    </Section>
  );
};
