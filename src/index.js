// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';
 
const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { class: 'brown' }, 'Chocolate'),
        React.createElement('li', { class: 'white' }, 'Vanilla'),
        React.createElement('li', { class: 'yellow' }, 'Banana')
      ]
    )
  );
 
ReactDOM.render(
  list,
  document.getElementById('global')
);
