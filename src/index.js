/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App'



const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};


require('!style-loader!css-loader!sass-loader!./index.scss');


ReactDom.render(<div style={styles}>
    <App />
	hi there
	</div>, document.getElementById('root'));
