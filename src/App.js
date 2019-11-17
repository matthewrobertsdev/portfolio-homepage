import React from 'react';
import './App.css';
import {projectInfos} from './ProjectInfos';
import ProjectView from './ProjectView';

function App() {
  return (
    <div>
      <h1 class="title text-color"> Matthew Roberts </h1>
      <h1 class="title text-color"> Software Developer and Tutor </h1>
    <a class="link-button grid-button" href="https://github.com/matthewrobertsdev">My Github</a>
    <br></br><br></br>
    {createProjectViews()}
    </div>
  );

  function createProjectViews(){
    return projectInfos.map((info)=>{return <div><ProjectView projectInfo={info}/><br></br></div>})
  }
}

export default App;
