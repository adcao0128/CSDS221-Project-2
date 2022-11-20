import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import DeadlineDatePicker from './DeadlineDatePicker'
import Button from '@mui/material/Button';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default class SimpleDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      deadline: null,
      priority: '',
      isComplete: false,
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
    console.log(this.state.title);
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleDeadlineChange(event) {
    this.setState({
        deadline: event.target.value
    });
  }

  handleAdd() {
    this.props.updateFunction(this.state.title, this.state.description, this.state.deadline, this.state.priority);
    this.props.handleClose();
  }

  render() {
  return (
    <div>
    <Dialog open={this.props.open}
      PaperProps={{ style: {
      minHeight: '70%',
      maxHeight: '70%',
    }}}>
      <DialogTitle
        sx={{
          color: 'white',
          bgcolor: 'primary.dark',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AddCircleIcon />
        Add Task
      </DialogTitle>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '32ch', height: '100%'},
        }}
        autoComplete="off"
      >
        <div>
          <TextField id="Title" label="Title" onChange={this.handleTitleChange}
      />
          <br />
          <TextField id="Description" label="Description" onChange={this.handleDescriptionChange}/>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Deadline"
              value={this.state.deadline}
              onChange={this.handleDeadlineChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br />
          <FormControl sx={{position: 'absolute', right: '10%'}}>
            <FormLabel>Priority</FormLabel>
              <RadioGroup row>
                <FormControlLabel onChange={this.setState({priority: "Low"})} size='small' value="Low" control={<Radio />} label="Low" />
                <FormControlLabel onChange={this.setState({priority: "Med"})} value="Med" control={<Radio />} label="Med" />
                <FormControlLabel onChange={this.setState({priority: "High"})}value="High" control={<Radio />} label="High"/>
              </RadioGroup>
          </FormControl>
          <Button size='small' variant='contained' sx={{position: 'absolute', right: '40%', top: '90%'}} onClick={this.handleAdd}>
            <AddCircleIcon />
            Add
          </Button>
          <Button color='error' size='small' variant='contained' sx={{position: 'absolute', right: '5%', top: '90%'}} onClick={this.props.handleCancel} >
            <DoNotDisturbAltIcon />
            Cancel
          </Button>
        </div>
      </Box>
    </Dialog>
    </div>
  );
      }
}
