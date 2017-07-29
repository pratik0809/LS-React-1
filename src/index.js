/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello'


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};


require('!style-loader!css-loader!sass-loader!./index.scss');


ReactDom.render(<div style={styles}>
	<Hello />
	<h2>start the magic 1</h2>
	hi there</div>, document.getElementById('root'));
