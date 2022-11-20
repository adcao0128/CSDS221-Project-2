import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import EditIcon from '@mui/icons-material/Edit';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

toastr.options = {
  'closeButton': true,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-right',
    'preventDuplicates': false,
    'showDuration': '1000',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut',
}

export default class SimpleDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.thisTitle,
      description: this.props.thisDescription,
      deadline: null,
      priority: this.props.thisPriority,
      isComplete: false,
      titleError: false,
      descriptionError: false,
      titleMessage: '',
      descriptionMessage: '',
      deadlineError: false,
      deadlineMessage: '',
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancelDoNothing = this.handleCancelDoNothing.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
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

  handlePriorityChange(event) {
    this.setState({
      priority: event.target.value
    });
  }

  handleAdd() {
    let validated = true; 
    if(this.state.title == '' || this.state.title == null){
      this.setState({
        titleError: true,
        titleMessage: "Title is Required!"
      })
      validated = false;
    }
    else if(this.props.taskList.some((curTask) => curTask[0] == this.state.title)){
      this.setState({
        titleError: true,
        titleMessage: "Different Title is Required!"
      })
      validated = false;
    }
    else {
      this.setState({
        titleError: false,
        titleMessage: ""
      })
    }
    if(this.state.description == '' || this.state.description == null){
      this.setState({
        descriptionError: true,
        descriptionMessage: "Description is Required!"
      })
      validated = false;
    }
    else {
      this.setState({
        descriptionError: false,
        descriptionMessage: ""
      })
    }
    /*
    if(this.state.deadline == '' || this.state.deadline == null){
      this.setState({
        deadlineError: true,
        deadlineMessage: "Deadline is Required!"
      })
      validated = false;
    }
    else {
      this.setState({
        deadlineError: false,
        deadlineMessage: ""
      })
    }
    */
    if(validated) {
      this.props.addFunction(this.state.title, this.state.description, this.state.deadline, this.state.priority, this.state.isComplete);
      this.setState({
        title: '',
        description: '',
        deadline: null,
        priority: 'Low',
        isComplete: false,
      });
      toastr.success("Task added sucesssfuly!")
      this.props.handleClose();
    }
  }

  handleUpdate(){
    this.props.updateFunction(this.props.thisTask, this.state.title, this.state.description, this.state.deadline, this.state.priority, this.state.isComplete);
    this.props.handleClose();
  }

  handleCancelDoNothing() {
    this.setState({
      title: '',
      description: '',
      deadline: null,
      priority: 'Low',
      isComplete: false,
      titleError: false,
      descriptionError: false,
      deadlineError: false,
      titleMessage: '',
      descriptionMessage: '',
      deadlineMessage: '',
    });
    this.props.handleCancel();
  }

  render() {
  return (
    <div>
    <Dialog open={this.props.open}
      PaperProps={{ style: {
      minHeight: '50%',
      maxHeight: '90%',
    }}}>
      <DialogTitle
        sx={{
          color: 'white',
          bgcolor: 'primary.dark',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!this.props.hideTitle ? <div><AddCircleIcon sx={{position: 'relative', top: '5px'}}/>Add Task</div> : <div><EditIcon sx={{position: 'relative', top: '5px'}}/>Edit Task</div>}
      </DialogTitle>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '32ch', height: '50%'},
        }}
        autoComplete="off"
      >
        <div>
          {!this.props.hideTitle && <TextField error={this.state.titleError} helperText={this.state.titleMessage} id="title" label="Title" value={this.state.title} onChange={this.handleTitleChange} />}
        
          <br />
          <TextField error={this.state.descriptionError} helperText={this.state.descriptionMessage} id="Description" value={this.state.description} label="Description" onChange={this.handleDescriptionChange}/>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Deadline"
              value={this.state.deadline}
              onChange={this.handleDeadlineChange}
              renderInput={(params) => <TextField error={this.state.deadlineError} helperText={this.state.deadlineMessage} {...params} />}
            />
          </LocalizationProvider>
          <br />
          <FormControl sx={{position: 'absolute', right: '10%'}}>
            <FormLabel>Priority</FormLabel>
              <RadioGroup row onChange={this.handlePriorityChange} value={this.state.priority}>
                <FormControlLabel size='small' value="Low" control={<Radio />} label="Low" />
                <FormControlLabel value="Med" control={<Radio />} label="Med" />
                <FormControlLabel value="High" control={<Radio />} label="High"/>
              </RadioGroup>
          </FormControl>
          <br />
          <br />
          <br />
          <br />
          {!this.props.hideTitle ? <Button size='small' variant='contained' sx={{position: 'absolute', right: '40%'}} onClick={this.handleAdd}>
            <AddCircleIcon />
            Add
          </Button> : <Button size='small' variant='contained' sx={{position: 'absolute', right: '40%'}} onClick={this.handleUpdate}>
            <EditIcon />
            Edit
          </Button>}
          <Button color='error' size='small' variant='contained' sx = {{position: 'absolute', right: '5%'}} onClick={this.handleCancelDoNothing} >
            <DoNotDisturbAltIcon />
            Cancel
          </Button>
          <br />
          <br />
          <br />
        </div>
      </Box>
    </Dialog>
    </div>
  );
      }
}
