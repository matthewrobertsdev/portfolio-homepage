import React from 'react';
import './App.css';

function ImageView(props) {
  return (
    <div>
      <video controls poster={props.posterSrc} className={props.classProp}>
        <source src={props.src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ImageView