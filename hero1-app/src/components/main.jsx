import React from 'react';
import videoBg from '../assets/video/videoBg.mp4';

const Main = () =>{
  return (
    <div>
      <video  src={videoBg} autoPlay loop muted id="videoBg"></video>
    </div>
  )
}
export default Main;