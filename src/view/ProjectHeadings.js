import React from 'react';
import './App.css';

function ProjectHeadings(props) {
  return (
    <div>
      <h2 className="text-color"> {props.title}</h2>
      <h3 className="text-color"> {props.description}</h3>
    </div>
  );

  
}

export default ProjectHeadings