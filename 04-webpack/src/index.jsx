import React from 'react';
import ReactDOM from 'react-dom'
import {App} from './app/App';


const domTarget = document.querySelector('#react-app');
ReactDOM.render(
  <App />,
  domTarget
)