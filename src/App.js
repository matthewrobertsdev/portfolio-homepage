import React from 'react';
import './App.css';
import {projectInfos} from './ProjectInfos';
import ProjectView from './ProjectView';

function App() {
  return (
    <div>
      <h1 className="title text-color"> Matthew Roberts </h1>
      <h1 className="title text-color"> Software Developer and Tutor </h1>
    <a className="link-button grid-button" href="https://github.com/matthewrobertsdev">My Github</a>
    <h1 className="title text-color"> My Portfolio </h1>
    <br></br>
    {createProjectViews()}
    </div>
  );

  function createProjectViews(){
    return projectInfos.map((info)=>{return <div><ProjectView projectInfo={info}/><br></br></div>})
  }
}

export default App;
