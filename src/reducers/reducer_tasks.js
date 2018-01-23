import { FETCH_TASK, FETCH_TASKS } from '../actions/index';


const INITIAL_STATE = {all: [], post: null};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_TASK:
			return {...state, task: action.payload.data};
		case FETCH_TASKS:
			return {...state, all: action.payload.data};
		default:
			return state;
	}
}
