import React from 'react';
import ReactDOM from 'react-dom';
import './view/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//document.body.style.backgroundColor = "rgb(0, 166, 255)";
document.title='Matt Roberts | Developer';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
