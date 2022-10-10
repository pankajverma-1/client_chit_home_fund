import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function AddFund() {
  return (
    <>
      <div className="m-0 m-sm-5 overflow-auto">
        <div className="addNewFund">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Fund Amount</TableCell>
                  <TableCell align="center">Total Member</TableCell>
                  <TableCell align="center">Month</TableCell>
                  <TableCell align="center">Payable Fund</TableCell>
                  <TableCell align="center">Last month withdrawal</TableCell>
                  <TableCell align="center">ADD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <TextField
                      id="outlined-basic"
                      label="Add fund"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      label="Add Member"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      label="Add Month"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      label="Other"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="outlined-basic"
                      label="Last month withdrawal"
                      variant="outlined"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Button variant="contained" style={{ position: 'unset' }}>
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="totalFunds m-0 m-sm-3 m-md-5">
          <Typography variant="h3" component="div">
            All Funds
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Fund Id</TableCell>
                  <TableCell align="center">Fund Amount</TableCell>
                  <TableCell align="center">Fund Timing</TableCell>
                  <TableCell align="center">Total Member</TableCell>
                  <TableCell align="center">Payable Amount</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      XXXXXXXXXXXXXXX
                    </TableCell>
                    <TableCell align="center">1500000</TableCell>
                    <TableCell align="center">3 Month</TableCell>
                    <TableCell align="center">20</TableCell>
                    <TableCell align="center">5000</TableCell>
                    <TableCell align="center">
                      <Button>Publish</Button>
                      <Button>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
