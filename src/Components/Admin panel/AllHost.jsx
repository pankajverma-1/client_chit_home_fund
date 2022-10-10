import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    'Frozen yoghurt',
    'xxxxxxxx',
    '1234567890123456',
    123456789000,
    4.0
  ),
  createData(
    'Ice cream sandwich',
    'xxxxxxxx',
    '1234567890123456',
    123456789000,
    4.3
  ),
  createData('Eclair', 'xxxxxxxx', '1234567890123456', 123456789000, 6.0),
  createData('Cupcake', 'xxxxxxxx', '1234567890123456', 123456789000, 4.3),
  createData('Gingerbread', 'xxxxxxxx', '1234567890123456', 123456789000, 3.9),
];

export default function AllHost() {
  return (
    <TableContainer component={Paper} className="m-0 m-sm-1 m-md-3">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">F's name</StyledTableCell>
            <StyledTableCell align="center">Account Number</StyledTableCell>
            <StyledTableCell align="center">Aadhar Number</StyledTableCell>
            <StyledTableCell align="center">Pan Number</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores explicabo commodi
              </StyledTableCell>
              <StyledTableCell align="right">
                <Link to="../user">Details</Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
