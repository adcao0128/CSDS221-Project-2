//Imports
import React from 'react';
import './style.css';
//More imports
import Card from '@mui/material/Card';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
//My defined imports
import AddButton from './AddButton';
import TaskTable from './TaskTable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  update() {
    this.setState(tsk)
  }

  render() {
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
          <AddButton />
        </Card>
        <TaskTable/>
      </div>
    );
  }
}
