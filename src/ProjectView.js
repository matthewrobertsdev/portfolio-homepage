import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectView(props) {
    return (
      <div>
        <hr></hr>
        <h2 className="text-color"> {props.projectInfo.title}</h2>
        <h3 className="text-color"> {props.projectInfo.description}</h3>
        <br></br>
        {createLinkButtons(props)}
        {createMedia(props)}
        <br></br>
      </div>
    );

    
  }

  function createMedia(props){
    const media = require.context('./', true);
    const mediaModel=props.projectInfo.mediaModel
      let src = media(mediaModel.src);
      if (mediaModel.type==='image'){
        return <div><br></br><br></br><br></br><img src={src} alt={mediaModel.alt} className='image' 
        style={{'width': mediaModel.widthPercent, 'maxWidth': mediaModel.maxWidth}}/></div>
      } else if (mediaModel.type==='video'){
        const posterContext = require.context('./', true);
        let posterSrc = posterContext(mediaModel.posterURL);
        return <div><video controls poster={posterSrc} style={{'width': mediaModel.widthPercent, 'maxWidth': mediaModel.maxWidth}}>
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video></div>
      }
  }

  function createLinkButtons(props){
    return props.projectInfo.links.map((link)=>{return <a className="link-button grid-button" 
  href={link.URL}>{link.name}</a>})
  }
export default ProjectView