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

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleClick = () => {
    
  };

  return (
    <Dialog onClose={handleClose} open={open}
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
          <TextField id="Title" label="Title" />
          <br />
          <TextField id="Description" label="Description" />
          <br />
          <DeadlineDatePicker />
          <br />
          <FormControl sx={{position: 'absolute', right: '10%'}}>
            <FormLabel>Priority</FormLabel>
              <RadioGroup row>
                <FormControlLabel size='small' value="Low" control={<Radio />} label="Low" />
                <FormControlLabel value="Med" control={<Radio />} label="Med" />
                <FormControlLabel value="High" control={<Radio />} label="High"/>
              </RadioGroup>
          </FormControl>
          <Button size='small' variant='contained' sx={{position: 'absolute', right: '40%', top: '90%'}} onClick={handleClick}>
            <AddCircleIcon />
            Add
          </Button>
          <Button color='error' size='small' variant='contained' sx={{position: 'absolute', right: '5%', top: '90%'}} onClick={handleClose} >
            <DoNotDisturbAltIcon />
            Cancel
          </Button>
        </div>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};