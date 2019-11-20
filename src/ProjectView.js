import React, { lazy } from 'react';
import './App.css';
import kv from './keyboard_view.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function ProjectView(props) {
    return (
      <div>
        <h2 className="text-color"> {props.projectInfo.title}</h2>
        <h3 className="text-color"> {props.projectInfo.description}</h3>
        <br></br>
        {createMedia(props)}
        <br></br>
        {createLinkButtons(props)}
      </div>
    );

    
  }

  function createMedia(props){
    const images = require.context('./', true);
    const mediaModel=props.projectInfo.mediaModel
      let src = images(mediaModel.src);
      if (mediaModel.type='image'){
        return <img src={src} alt={mediaModel.alt} className='image' 
        style={{'width': mediaModel.widthPercent, 'maxWidth': '650px'}}/>
      }
  }

  function createLinkButtons(props){
    return props.projectInfo.links.map((link)=>{return <a className="link-button grid-button" 
  href={link.URL}>{link.name}</a>})
  }
export default ProjectView