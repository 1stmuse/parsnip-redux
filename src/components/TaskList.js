import React from 'react';
import Task from './Task';

const TaskList = props => {
        return (
            <div className="task­list">
                <div className="task-list-title">
                    <strong>{props.status}</strong>
                </div>
                <div className='tasks'>
                {props.tasks.map(task => (<Task key={task.id} task={task} status={props.status} editTask={props.editTask} />))}
                </div>
            </div>
        );
};

export default TaskList;
