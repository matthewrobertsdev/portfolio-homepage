import React from 'react';
import './App.css';

function ImageView(props) {
  return (
    <div>
      <br/><br/><br/>
      <img src={props.src} alt={props.alt} className='image' 
        class={props.classProp}/>
    </div>
  );
}

export default ImageView