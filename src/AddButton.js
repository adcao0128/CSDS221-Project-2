import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import React, { Component } from 'react';
import React, { useState } from 'react';
import SimpleDialog from './SimpleDialog';

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
  }
  
  handleOpen() {
    console.log("open");
    this.setState({
      open: true
    });
  }

  render() {
  return (
    <div>
      <Button
        onClick={this.state.handleOpen}
        variant="contained"
        size="small"
        sx={{ position: 'absolute', right: '10px', top: '8px' }}
      >
        <AddCircleIcon />
        ADD
      </Button>
      <SimpleDialog
        open={this.state.open}
      />
    </div>
  );
  }
}
