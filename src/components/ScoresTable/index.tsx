import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";

interface ScoresTableProps {
  scores: number[];
}

const ScoresTable: React.FC<ScoresTableProps> = ({ scores }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Match</TableCell>
          {scores.map((score, index) => (
            <TableCell key={index} align="center">{`Match ${
              index + 1
            }`}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            Result
          </TableCell>
          {scores.map((score, index) => (
            <TableCell key={index} align="center">
              {score}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default ScoresTable;
