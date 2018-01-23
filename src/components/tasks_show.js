import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchTask, updateTask, deleteTask } from '../actions/index';
import { Link } from 'react-router'

class TasksShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    
    componentWillMount(){
        this.props.fetchTask(this.props.params.id);
    }

    onSubmit = (props) =>{
            this.props.updateTask(props);
    }

    onDeleteClick = () => {
        this.props.deleteTask(this.props.params.id).then(
            () => {
                this.context.router.push('/');
            }
        );
    }
    
    render (){
        const { task } = this.props;
        const  { fields: { title, categories, content },handleSubmit } = this.props;

        if(!task){
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}>
                    Delete Task</button>
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                    <h3>Update To Do</h3>
                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
                        <label>Title</label>
                        <input type="text" className="form-control" value={task.title} { ...title}/>
                        <div className="text-help">
                            {title.touched ? title.error : ''}
                        </div>
                    </div>
                    
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>
                        <label>Content</label>
                            <textarea className="form-control" value={task.content} {...content} />
                            <div className="text-help">
                            {content.touched ? content.error : ''}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" >Update</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
                </div>
        );
    }
}

function mapStateToProps(state){
    return { task: state.tasks.task};
}

function validate(value){
    console.log(value);
    const errors = {};

    // if(!values.title){
    //     errors.title = 'Enter a title';
    // }

    // if(!values.content){
    //     errors.content = 'Enter content';
    // }

    return errors;
}

TasksShow = connect(mapStateToProps, { fetchTask, deleteTask})(TasksShow);

export default reduxForm({
    form: 'TasksNewForm',
    fields: ['title','categories','content'],
    validate
}, null, { updateTask })(TasksShow);


{/* <div className="form-group">
                        <label>Categories</label>
                        <input type="text" className="form-control" value={task.categories} {...categories}/>
                        <div className="text-help">
                            {categories.touched ? categories.error : ''}
                        </div>
                    </div> */}
