import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

export default class ToDoDisplay extends Component {
    constructor(){
        super()
        this.state = {
            value: "",
			tasks: [],
        }
		this.taskAdd = this.taskAdd.bind(this);
		this.changeTask = this.changeTask.bind(this);
    };

	taskAdd = () => {
		this.setState((state) => {
			const tasks = [...state.tasks, state.value];
			return {
				tasks, 
				value: "",
			}
		});
	};

	changeTask = (event) => {
		this.setState({value: event.target.value})
	};

	removeTask = (item) => {
		this.setState({tasks: this.state.tasks.filter((task) => {
		return task !== item
		})});	
	};

	render() {
		return ( 
			<div>
				<h3>To Do List:</h3>
				<form className="d-flex">
					<Input  onChange={this.changeTask} placeholder="Task"/> 
					<Button onClick={this.taskAdd} color="success">Add</Button>
				</form>
				<ul>
					{this.state.tasks.map((item) => (
						<li key={item}>{item}<Button onClick={() => this.removeTask(item)} color="danger">Completed</Button></li>
					))}
				</ul>
			</div>
		)
	}
}