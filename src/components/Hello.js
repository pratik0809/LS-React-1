import React from 'react';
import ReactDom from 'react-dom';
import { Component } from 'React';

class Hello extends Component { //statefull, smart, container, class
  constructor() {
    super();
    this.state = {
      movies: ['Matrix', 'Oblivion', 'IronMan', 'Die Hard', 'Wonder Woman'],
    };
  }
  render() {
    return (<h1>{this.state.movies}</h1>);
  }
};

export default Hello;