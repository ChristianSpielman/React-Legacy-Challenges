import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  	constructor() {
		super();
		this.state = {
			things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
			searchWord: "",
			foundWordArray: [],
		}
    }

    searchFunction(event) {
		const value = event.target.value.toLowerCase(); 
		this.setState({searchWord: value});
		this.filterFunction(value)
    }

	filterFunction(word) {
		this.setState({foundWordArray: this.state.things.filter((thing) => {
			return thing.includes(word)
		})})
	}

    render() {
		return (
			<div>
				<form className="form">
					<span>Search: {this.state.searchWord}</span>
					<br />
					<Input onChange={this.searchFunction} placeholder='Search Here' />
				</form>
				<br />
				<h3>Results:</h3>
					{//ternary
						//if searchWord ===(blank)it is true        display()
						this.state.searchWord === "" ? this.state.things.map(thing => <div key={thing}>{thing}</div>) : this.state.foundWordArray.map(word => <div key={word}>{word}</div>)
					}
			</div>
		)
	}
 }
