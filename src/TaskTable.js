import React from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default class TaskTable extends React.Component {
  render() {
    return (
      <div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center" color='gray'>Description</TableCell>
                <TableCell align="center" color='gray'>Deadline</TableCell>
                <TableCell align="center" color='gray'>Priority</TableCell>
                <TableCell align="center" color='gray'>Is Complete</TableCell>
                <TableCell align="center" color='gray'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
