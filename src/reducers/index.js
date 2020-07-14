
const initialState = {
    tasks:[],
    isLoading: false,
    error:null,
}


export default function tasks(state = initialState, action) {
    switch(action.type){
        case 'FETCH_TASKS_STARTED' :{

            return{
                ...state,
                isLoading: true
            }
        }

        case 'FETCH_TASKS_SUCCEEDED' :{
            return {
                ...state,
                isLoading: false,
                tasks : action.payload.tasks
            }
        }
        case 'FETCH_TASKS_FAILED' :{
            return{
                ...state,
                isLoading:false,
                error: action.payload.error,
            }
        }
        case 'CREATE_TASK_SUCCEEDED' : {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }
        case 'EDIT_TASK_SUCCEEDED' :{
            const {payload} = action
            return{
                ...state,
                tasks: state.tasks.map(task=>{
                    if(task.id === payload.task.id){
                        return payload.task
                    }
                    return task
                })
            }
        }
        default: {
            return state
        }
    }
}