import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import React, { Component } from 'react';
import React, { useState } from 'react';
import SimpleDialog from './SimpleDialog';

export function addTask({arr}) {

}



export default function AddButton() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        size="small"
        sx={{ position: 'absolute', right: '10px', top: '8px' }}
      >
        <AddCircleIcon />
        ADD
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
