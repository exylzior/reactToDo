import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import { Link } from 'react-router';


class TasksIndex extends Component{
	componentWillMount() {
		this.props.fetchTasks();
	}

	renderTasks() {
		return this.props.tasks.map((task) =>{
			return (
				<li className="list-group-item" key={task.id}>
					<Link to={"posts/" + task.id}>
					<strong>{task.title}</strong>
					</Link>
				</li>
			);
		})
	}
	
	render() {
		return(
		<div> 
			<div className="text-xs-right">
				<Link to="/posts/new" className="btn btn-primary">
				Add Task
				</Link>
			</div>
			<h3>To Do List</h3>
			{this.props.tasks.length === 0 ? <div className="guide"> Click Add Task</div>: ''}
			<ul className="list-group">
				{this.renderTasks()}
			</ul>
		</div>
		);
		
		
	}

	
}

//function mapDispatchToProps(dispatch){
	//return bindActionCreators({ fetchPosts }, dispatch);
//}

function mapStateToProps(state){
	return { tasks: state.tasks.all };
}

export default connect(mapStateToProps, { fetchTasks })(TasksIndex);


