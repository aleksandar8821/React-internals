import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const render = () => {
  document.getElementById('div1').innerHTML = `
    <div class="example">
      DOM API
      <input />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      'div',
      { className: 'example' },
      'React API',
      React.createElement('input', null),
      React.createElement('pre', null, (new Date).toLocaleTimeString())
    ),
    document.getElementById('div2')
  );
};

setInterval(render, 1000);
