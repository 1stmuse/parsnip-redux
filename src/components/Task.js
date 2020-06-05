import React from 'react';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const Task = props => {

    const changeStatus =(e, id)=>{
        e.preventDefault()
        props.editTask(id, e.target.value)
    }

    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
            
                <select value={props.task.status} onChange={(e)=>changeStatus(e, props.task.id)} >
                    {TASK_STATUSES.map(stat=>(
                        <option value={stat} key={stat} >{stat}</option>
                    ))}
                </select>

            </div>
            <hr />
            <div className="task­body">{props.task.description}</div>
        </div>
    );
};
export default Task;