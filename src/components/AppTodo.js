import React, { Component } from 'react';


const AppTodo = (props) => {
	return (
        <div>
           <h1>{props.todo}</h1>
           <input
           type='text'
           value={props.todo}
            onChange={prop.handleTodo}
            />
        </div>
		)
};

export default AddTodo;
