import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import tasksReducer from './reducers'
import App from './App';

const rootReducer =(state={}, action)=>{

  return{
    tasks: tasksReducer(state.tasks, action)
  }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

