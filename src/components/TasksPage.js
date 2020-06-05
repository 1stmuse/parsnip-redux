import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewCardForm:false,
            title: '',
            description: '',
        };
    }

    onTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    };

    resetForm() {
        this.setState({
            showNewCardForm: false,
            title: '',
            description:''
        });
    }

    onCreateTask = (e) => {
        e.preventDefault();
        this.props.onCreateTask({
            title: this.state.title,
            description: this.state.description,
        });
        this.resetForm();
    };

    toggleForm = () => {
        this.setState({ showNewCardForm: !this.state.showNewCardForm });
    };
    renderTaskLists() {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return (<TaskList key={status} status={status} tasks={statusTasks} editTask={this.props.editTask} />);
        });
    }

    render() {

        return (
            <div className="task­list">
                <div className='drop'>
                    <div className="button-div">
                        <button className="button" onClick={this.toggleForm}>
                            + New task
                        </button>
                    </div>
                    {this.state.showNewCardForm && (
                    <form className="" onSubmit={this.onCreateTask}>
                        <input className="full­width­input" onChange={this.onTitleChange} value={this.state.title} type="text" placeholder="title" />
                        <input className="full­width­input" onChange={this.onDescriptionChange} value={this.state.description} type="text" placeholder="description" />
                        <div className='save-btn'>
                            <button className="save" type="submit">
                                Save
                            </button>
                        </div>
                    </form>)}
                </div>
                
                <div className="taskList">
                    {this.renderTaskLists()}
                </div>
            </div>
        );
    }
}

export default TasksPage;
