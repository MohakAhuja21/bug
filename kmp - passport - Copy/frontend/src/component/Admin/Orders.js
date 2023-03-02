import React from 'react'
import { Button, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import { Link } from 'react-router-dom'
import "./Orders.css";
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

const Orders = () => {
    const arr = [1, 2, 3, 4];
    
  return (
    <div className='orders'>
          <TableContainer>
            <Table>
            {/* <caption>A basic table example with a caption</caption> */}
                <TableHead>
                    <TableRow className="tb__row">
                    <StyledTableCell>Order Id</StyledTableCell>
                    <StyledTableCell>Item Qty.</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Payment Method</StyledTableCell>
                    <StyledTableCell>User</StyledTableCell>
                    <StyledTableCell>Amount</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {arr.map((i) => (
            <StyledTableRow key={i} className="tb__row">
            <TableCell>#987RGbsgu8</TableCell>
            <TableCell>5</TableCell>
            <TableCell>Processing</TableCell>
            <TableCell>Cash On Delivery</TableCell>
            <TableCell>Mohak</TableCell>
            <TableCell>760</TableCell>
            {/* here ${} is id  */}
            <TableCell>
            <Link to={`/order/${"asdsds"}`}>
            <VisibilityRoundedIcon/>
            </Link>
            <Button>Update Status</Button>
            </TableCell>
        </StyledTableRow>
            ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Orders