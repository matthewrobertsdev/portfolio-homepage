import React, { lazy } from 'react';
import './App.css';
import kv from './keyboard_view.png'

function ProjectView(props) {
    return (
      <div>
        <h2 className="text-color"> {props.projectInfo.title}</h2>
        <h3 className="text-color"> {props.projectInfo.description}</h3>
        {createMedia(props)}
        <br></br>
        {createLinkButtons(props)}
      </div>
    );

    
  }

  function createMedia(props){
    const images = require.context('./', true);
    return props.projectInfo.media.map((media)=>{
      let img = images(media);
      return <img src={img} className='image'/>})
  }

  function createLinkButtons(props){
    return props.projectInfo.links.map((link)=>{return <a className="link-button grid-button" 
  href={link.URL}>{link.name}</a>})
  }
export default ProjectView