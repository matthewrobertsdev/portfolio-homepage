import React from 'react';
import './App.css';

function LinkButton(props) {
  return (
    <a className="link-button grid-button" 
  href={props.url}>{props.name}</a>
  );
}

export default LinkButton