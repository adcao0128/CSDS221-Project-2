//imports
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import React, { Component } from 'react';
import React, { useState } from 'react';
//My defined imports
import SimpleDialog from './SimpleDialog';

export default class UpdateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
      <Button onClick={this.handleOpen} size='small' variant='contained' sx={{bgColor: 'primary.dark'}}><EditIcon />Update</Button>
      <SimpleDialog
        hideTitle={true}
        open={this.state.open}
        handleClose={this.handleClose}
        handleCancel={this.handleCancel}
        updateFunction={this.props.updateFunction}
        thisTask = {this.props.thisTask}
      />
    </div>
  );
  }
}
