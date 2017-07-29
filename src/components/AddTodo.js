import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App'

const AddTodo = (props) => {
	return (
        <div>
           <h1>{props.todo}</h1>
           <input
           type='text'
           value={props.todo}
           onChange={props.handleTodo}
            />
        </div>
		)
};

export default AddTodo;
