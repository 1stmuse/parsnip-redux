import React, { Component } from 'react';
import {connect} from 'react-redux'
import TasksPage from './components/TasksPage';

import {createTask, editTask, fetchTasks} from './actions'
import FlashMessage from './components/FlashMessage'
import './App.css'



class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchTasks())
  }

  onCreateTask =({title, description})=>{
    this.props.dispatch(createTask({title, description}))
  }

  onEditTask=(id, status)=>{
    return this.props.dispatch(editTask(id, status))
  }

  render() {
    return (
          <div>
            {this.props.error && 
              <FlashMessage message={this.props.error} />
            }
            <div className="main-content">
              <TasksPage 
                tasks={this.props.tasks} 
                onCreateTask ={this.onCreateTask}
                editTask={this.onEditTask}
                isLoading ={this.props.isLoading}
              />
          </div>
        </div>
    );
  }
}

function mapStateToProps (state){
  const {tasks, isLoading, error }= state.tasks
  return{
    tasks,
    isLoading,
    error
  }
}

export default connect(mapStateToProps)(App) ;


// json-­server ­­--watch db.json ­­--port 3001

