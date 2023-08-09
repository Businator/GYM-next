import React from 'react';
import { TableHead, TableCell, TableRow } from '@mui/material';
import { workWithTableApi } from '../API/TableApi';

const THead = () => {
  const arrayListOfDay = workWithTableApi.getDays();

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {arrayListOfDay.map((day, index) => (
          <TableCell key={index} align='center'>
            {day.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default THead;
