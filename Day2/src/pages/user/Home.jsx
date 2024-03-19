import React, { useState } from 'react';
import Navbar from './Navbar';
import '../../assets/css/Home.css';
import video1 from '../../assets/images/homevideo.mp4';
function Home() {
  return(
    <div>
    
   <div className="video-container">
      <video 
      controls
       autoplay
        loop 
        muted
        style={{ width: '100%', height: '70%' }}>
        <source src={video1} />
      </video>
      <div
        style={{
          color: 'white',
          position: 'absolute',
          top: '25%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left',
        }}
      >
        <div className="a1">
          <div>Engage</div>
          <div>Empower</div>
          <div>Enhance</div>
        </div>
        <div className="a2">Because those who made us deserve to<br></br> age magnificently from the comfort of <br></br>their own homes.</div>
    
    <button className="home-button">
    connect with us
    </button>
    </div>
    <div className="content-container">
      {/*<div className="x">

        <h5>40000+</h5>
        <h3>Elders Empowered</h3>
      </div>
      <div className="y">

        <h5>2000+</h5>
        <h3>lives saved</h3>
      </div>
      <div className="z">

        <h5>2000+</h5>
        <h3>Events Organaised</h3>
      </div>*/}
      <div className="x">

      <h5>40000+<br></br><h3>Elders Empowered</h3></h5>
      
      </div>
      <div className="y">

      <h5>2000+<br></br><h3>Lives Saved</h3></h5>
      
      </div>
      <div className="z">

      <h5>20000+<br></br><h3>Events Organaised</h3></h5>
      
      </div>
      </div>
    </div>
       </div>

   
  )
}
  export default Home;