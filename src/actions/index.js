import * as api from '../api'

function createTaskSucceeded(task) {
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            task
        }
    }
}

export function createTask({title, description, status = 'Unstarted'}){
    return (dispatch)=>{
        api.createTask({title,description,status})
            .then(res=>{
                dispatch(createTaskSucceeded(res.data))
            })
    }
}

function editTaskSucceeded(task) {
    return {
        type: 'EDIT_TASK_SUCCEEDED',
        payload: {
            task
        }
    };
}

function getTaskById(tasks, id){
    return tasks.find(task=> task.id === id)
}

export function editTask(id, status){
    return (dispatch , getState)=>{
        const task = getTaskById(getState().tasks.tasks, id)
        const updatedTask = {...task, status:status}

        api.updateTask(id, updatedTask)
            .then(res=>{
                dispatch(editTaskSucceeded(res.data))
            })
            
    }
}

function fetchTasksStarted(){
    return{
        type:'FETCH_TASKS_STARTED'
    }
}

function fetchTasksSucceeded(tasks){
    return{
        type: 'FETCH_TASKS_SUCCEEDED',
        payload:{
            tasks
        }
    }
}
function fetchTasksFailed(error){
    return{
        type:'FETCH_TASKS_FAILED',
        payload:{
            error,
        }
    }
}

export function fetchTasks(){
    return (dispatch)=>{
        dispatch(fetchTasksStarted())
        api.fetchTacks()
            .then(res=>{
                setTimeout(()=>{
                    dispatch(fetchTasksSucceeded(res.data))
                },2000)
            })
            .catch(err=>{
                dispatch(fetchTasksFailed(err.message))
            })
    }
}

