import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./MyOrder.css";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { styled } from '@mui/material/styles';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const MyOrders = () => {
    const arr = [1, 2, 3];
    
  return (
    <div className="myorders">
        <TableContainer>
            <Table>
            {/* <caption>A basic table example with a caption</caption> */}
                <TableHead>
                    <TableRow className="tb__row">
                    <StyledTableCell>Order Id</StyledTableCell>
                    <StyledTableCell>Item Qty.</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Payment Method</StyledTableCell>
                    <StyledTableCell>Amount</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {arr.map((i) => (
            <StyledTableRow className="tb__row">
            <TableCell>#987RGbsgu8</TableCell>
            <TableCell>5</TableCell>
            <TableCell>Processing</TableCell>
            <TableCell>Cash On Delivery</TableCell>
            <TableCell>760</TableCell>
            {/* here ${} is id  */}
            <TableCell>
            <Link to={`/order/${"asdsds"}`}>
            <VisibilityRoundedIcon/>
            </Link>
            </TableCell>
        </StyledTableRow>
            ))}     
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default MyOrders