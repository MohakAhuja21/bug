import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Users.css";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { styled } from "@mui/material/styles";
import img from "../User/Profile.png";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Users = () => {
  const arr = [1, 2];

  return (
    <div className="users">
      <TableContainer>
        <Table>
          {/* <caption>A basic table example with a caption</caption> */}
          <TableHead>
            <TableRow className="tb__row">
              <StyledTableCell>User Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>role</StyledTableCell>
              <StyledTableCell>user since</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((i) => (
              <StyledTableRow key={i} className="tb__row">
                <TableCell>#987RGbsgu8</TableCell>
                <TableCell>Mohak</TableCell>
                <TableCell>
                  {" "}
                  <img src={img} alt="User" />{" "}
                </TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>{"10-02-2023"}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
