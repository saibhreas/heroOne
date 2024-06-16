import React from 'react';
import videoBg from '../assets/video/purple_moves.mp4';

function Main () {
  return (
    <div className='main'>
      <video  src={videoBg} autoPlay loop muted id="videoBg"></video>
        <div className='content'>
          <h1>This is my HERO jargon </h1>
          <p>Welcome to here </p>

          </div>
    </div>
  )
}
export default Main;