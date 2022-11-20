import React from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AddButton from './AddButton';

export default class TaskTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }
  render() {
    return (
      <div>
        <Card
          sx={{
            m: -1.2,
            width: 'auto',
            height: 50,
            color: 'white',
            bgcolor: 'primary.dark',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MenuIcon />
          <Typography variant="button">FRAMEWORKS</Typography>
          <AddButton taskList={this.state.tasks}/>
        </Card>
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
}
