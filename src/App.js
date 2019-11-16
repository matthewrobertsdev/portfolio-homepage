import React from 'react';
import './App.css';
import {projectInfos} from './ProjectInfos';
import ProjectView from './ProjectView';

function App() {
  return (
    <div>
      <h1 class="title text-color">
        My name is Matthew Roberts and I am a software developer and tutor. This page has links to some projects I have
        on GitHub, and tells about them some too.
    </h1>
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
