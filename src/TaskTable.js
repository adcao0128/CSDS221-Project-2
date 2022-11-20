import React from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function TaskTable(props) {
  const tasks = props;
    return (
      <div>
        <TableContainer sx={{position: 'absolute', top: '8%'}}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{color: 'gray'}}>Title</TableCell>
                <TableCell align="center" sx={{color: 'gray'}}>Description</TableCell>
                <TableCell align="center" sx={{color: 'gray'}}>Deadline</TableCell>
                <TableCell align="center" sx={{color: 'gray'}}>Priority</TableCell>
                <TableCell align="center" sx={{color: 'gray'}}>Is Complete</TableCell>
                <TableCell align="center" sx={{color: 'gray'}}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}
