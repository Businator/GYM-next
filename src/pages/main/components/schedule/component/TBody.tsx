import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import { workWithTableApi } from "../API/TableApi";

export const TBody = () => {
  const timeArray = workWithTableApi.getTimes();

  const workoutArray = workWithTableApi.getWorkout();

  return (
    <TableBody>
      {timeArray.map((time, index) => {
        return (
          <TableRow key={index}>
            <TableCell align="left">{time}</TableCell>
            {workoutArray.map((days, index) => {
              const training = days.filter((training) =>
                training.time.includes(time)
              );
              if (training.length) {
                return training.map((training, index) => (
                  <TableCell key={index} align="center">
                    {training.typeOfTraining.toUpperCase()}
                  </TableCell>
                ));
              } else {
                return <TableCell key={index}></TableCell>;
              }
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
