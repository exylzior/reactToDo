import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './components/app';
import TasksIndex from './components/tasks_index';
import TasksNew from './components/tasks_new';
import TasksShow from './components/tasks_show';


export default(
	<Route path="/" component={App}>
		<IndexRoute component={TasksIndex} />
		<Route path="posts/new" component={TasksNew} />
		<Route path="posts/:id" component={TasksShow} />
	</Route>
);