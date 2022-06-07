import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>, document.getElementById('root')
// );

document.getElementById('div1').innerHTML = `
	<div class="example">
    DOM API
  </div>
`;

ReactDOM.render(
  React.createElement(
    'div',
    { className: 'example' },
    'React API',
  ),
  document.getElementById('div2'),
);