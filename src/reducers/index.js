import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  form: formReducer
});

export default rootReducer;
