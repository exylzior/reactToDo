import axios from 'axios';

export const FETCH_TASKS = 'FETCH_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=32589nhymjukilopq';


export function fetchTasks() {
	const request =  axios.get(`${ROOT_URL}/posts${API_KEY}`);
		
		return {
			type: FETCH_TASKS,
			payload: request
		};
}

export function createTask(props){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);

	return{
		type: CREATE_TASK,
		payload: request
	}
}

export function fetchTask(id){
	const request =  axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_TASK,
		payload: request
	}
}

export function updateTask(props){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);

	return{
		type: UPDATE_TASK,
		payload: request
	}
}

export function deleteTask(id){
	const request =  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: DELETE_TASK,
		payload: request
	}
}