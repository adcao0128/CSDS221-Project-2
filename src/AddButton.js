import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';

export default class AddButton extends React.Component {
  render() {
    return (
      <div>
        <Button variant="contained" size='small' sx={{position:'absolute', right: '10px', top: '8px'}}>
          <AddCircleIcon />
          ADD
        </Button>
      </div>
    );
  }
}
