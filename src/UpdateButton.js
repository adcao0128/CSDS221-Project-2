//imports
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import React, { Component } from 'react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
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
      <Button onClick={this.handleOpen} size='small' variant='contained' sx={{bgColor: 'primary.dark'}}><FontAwesomeIcon icon={faPenToSquare} />Update</Button>
      <SimpleDialog
        hideTitle={true}
        open={this.state.open}
        handleClose={this.handleClose}
        handleCancel={this.handleCancel}
        updateFunction={this.props.updateFunction}
        thisTask = {this.props.thisTask}
        thisTitle = {this.props.thisTitle}
        thisDescription = {this.props.thisDescription}
        thisDeadline = {this.props.thisDeadline}
        thisPriority = {this.props.thisPriority}
        taskList={this.props.taskList}
      />
    </div>
  );
  }
}
