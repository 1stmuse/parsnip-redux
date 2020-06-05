import {uniqueId} from '../actions'
const mockTasks = [
    {
        id: uniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
]


export default function tasks(state = {tasks:mockTasks}, action) {
    if(action.type ==='CREATE_TASK'){
        return {
            tasks: [...state.tasks, action.payload]
        }
    }
    if(action.type === 'EDIT_TASK'){
        const edited = state.tasks.map(task=>{
            if(task.id === action.payload.id){
                task = {...task, status:action.payload.status}
            }
            return task
        })
        return{
            tasks: edited
        }
    }
    return state
}