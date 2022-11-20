//Imports
import React from 'react';
import './style.css';
//More imports

//My defined imports
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
        <TaskTable/>
      </div>
    );
  }
}
