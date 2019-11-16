import React from 'react';
import './App.css';

function ProjectView(props) {
    return (
      <div>
        <h2 class="text-color"> {props.projectInfo.title}</h2>
        <h3 class="text-color"> {props.projectInfo.description}</h3>
        {createLinkButtons(props)}
      </div>
    );

    
  }

  function createLinkButtons(props){
    return props.projectInfo.links.map((link)=>{return <a class="link-button grid-button" 
  href={link.URL}>{link.name}</a>})
  }
export default ProjectView