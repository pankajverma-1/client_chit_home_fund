import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

const UserCompleteFundDetails = () => {
  return (
    <>
      <div className="m-3 w-100">
        <div className="d-flex justify-content-around w-100 my-3">
          <div className="fundId">
            Fund Id :- <span className=" fw-bold">XXXXXXXXXXX</span>
          </div>
          <div className="fundAmount">
            Fund Amount :- <span className=" fw-bold">1500000</span>
          </div>
          <div className="month">
            Months :- <span className=" fw-bold">1500000</span>
          </div>
        </div>

        <div className="my-5 d-flex flex-column align-items-center">
          <div className="h1">Winner</div>
          <div className="my-2 w-100">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="center">
                      Member Name
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Father Name
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Other Details
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      User Details
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      000000000000000
                    </StyledTableCell>
                    <StyledTableCell align="center">XXXXXXXX</StyledTableCell>
                    <StyledTableCell align="center">XXXXXXXXXX</StyledTableCell>
                    <StyledTableCell align="center">Other</StyledTableCell>
                    <StyledTableCell align="center">
                      XXXXXXXXXXX
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCompleteFundDetails;
