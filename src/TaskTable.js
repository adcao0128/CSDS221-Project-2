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
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import 'font-awesome/css/font-awesome.min.css';
import UpdateButton from './UpdateButton';

export default class TaskTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
    this.handleUpdate=this.handleUpdate.bind(this);
  }

  handleUpdate(title, description, deadline, priority, isComplete) {
    this.setState({
      tasks: [...this.state.tasks, [title, description, deadline, priority, isComplete]]
    });
  }

  handleChecked(task){
    let nextTask = this.state.tasks
    nextTask.filter((curTask) => task == curTask)[0][4] = !nextTask.filter((curTask) => task == curTask)[0][4]
    this.setState(
      {
        tasks: nextTask
      }
    )
  }

  handleDelete(task) {
    let nextTask = this.state.tasks
    nextTask = nextTask.filter((curTask) => task !== curTask)
    this.setState(
      {
        tasks: nextTask
      }
    )
  }



  render() {
    
    const tableItems = this.state.tasks.map((task) =>
          <TableRow>
            <TableCell align="center">{task[0]}</TableCell>
            <TableCell align="center">{task[1]}</TableCell>
            <TableCell align="center">{task[2]}</TableCell>
            <TableCell align="center">{task[3]}</TableCell>
            <TableCell align="center"><Checkbox checked={task[4]} onChange={() => this.handleChecked(task) }/></TableCell>
            <TableCell align="center">
              {!task[4] && <UpdateButton />}
              <Button size='small' variant='contained' color='error' onClick={() => this.handleDelete(task)}><HighlightOffIcon />Delete</Button>
            </TableCell>
          </TableRow>);
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
          <AddButton updateFunction={this.handleUpdate}/>
        </Card>
        <TableContainer sx={{position: 'absolute', top: '50px'}}>
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
            <TableBody>
              {tableItems}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
