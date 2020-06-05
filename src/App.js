import React, { Component } from 'react';
import {connect} from 'react-redux'
import TasksPage from './components/TasksPage';

import {createTask, editTask} from './actions'
import './App.css'



class App extends Component {


  onCreateTask =({title, description})=>{
    this.props.dispatch(createTask({title, description}))
  }

  onEditTask=(id, status)=>{
    return this.props.dispatch(editTask(id, status))
  }

  render() {
    return (
      <div className="main-content">
        <TasksPage 
          tasks={this.props.tasks} 
          onCreateTask ={this.onCreateTask}
          editTask={this.onEditTask}
        />
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    tasks:state.tasks
  }
}

export default connect(mapStateToProps)(App) ;


