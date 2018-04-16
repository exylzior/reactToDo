import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

const ROOT_URL = 'https://still-inlet-92099.herokuapp.com';


export function fetchTasks() {
	const request =  axios.get(`${ROOT_URL}/posts`);
		
		return {
			type: FETCH_TASKS,
			payload: request
		};
}

export function createTask(props){
	const request = axios.post(`${ROOT_URL}/posts`,props);

	return{
		type: CREATE_TASK,
		payload: request
	}
}

export function fetchTask(id){
	const request =  axios.get(`${ROOT_URL}/posts/` + id );

	return {
		type: FETCH_TASK,
		payload: request
	}
}

export function updateTask(props, id){
	const request = axios.put(`${ROOT_URL}/posts/` + id,props);

	return{
		type: UPDATE_TASK,
		payload: request
	}
}

export function deleteTask(id){
	const request =  axios.delete(`${ROOT_URL}/posts` + id);

	return {
		type: DELETE_TASK,
		payload: request
	}
}