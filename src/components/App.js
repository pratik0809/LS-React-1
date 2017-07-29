import React, { Component } from 'react';
import { render } from 'react-dom';

import AddTodo from './AddTodo'


const styles = {
	 fontFamily: 'sans-serif',
	 textAlign: 'center',
};

class App extends Component {
   constructor(){
     super();
     this.state = {
     	todo: '',
     	todoList: [],
     }
     this.handleTodo = this.handleTodo.bind(this);
   }
   handleTodo(event) {
   	let newTodo = this.state.todo;
   	newTodo = event.target.value;
   	this.setState({todo: newTodo});
   }

   render () {
   	  return (
          <AddTodo todo={this.state.todo} handleTodo={this.handleTodo}/>
   	  	)
   }
};

export default App;