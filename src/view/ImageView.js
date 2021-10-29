import React from 'react';
import './App.css';

function ImageView(props) {
  return (
      <img src={props.src} alt={props.alt} className='image' 
        class={props.classProp}/>
  );
}

export default ImageView