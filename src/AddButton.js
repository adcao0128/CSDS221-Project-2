//imports
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import React, { Component } from 'react';
import React, { useState } from 'react';
//My defined imports
import SimpleDialog from './SimpleDialog';

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleCancel() {
    this.setState({
      open: false
    });
  }

  render() {
  return (
    <div>
      <Button
        onClick={this.handleOpen}
        variant="contained"
        size="small"
        sx={{ width: '100px', position: 'absolute', right: '10px', top: '8px' }}
      >
        <AddCircleIcon />
        ADD
      </Button>
      <SimpleDialog
        hideTitle={false}
        open={this.state.open}
        handleClose={this.handleClose}
        handleCancel={this.handleCancel}
        addFunction={this.props.addFunction}
        thisTitle = {''}
        thisDescription = {''}
        thisDeadline ={null}
        thisPriority = {'Low'}
        taskList={this.props.taskList}
      />
    </div>
  );
  }
}
