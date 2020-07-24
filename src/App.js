import React from 'react';
import './App.css';
import './Style.css';

import imgInSrc from "./imgInSrc.png";
import myVideo from "./video/myvideo.mp4";
function App() {
  return (
    <div className="App">
      <div className="content">
      <h1 className="titlered">HOUSSEM</h1>
      <br/>
      <img src={imgInSrc}/>
      <br/>
      <img src="/imgInPublic.png"/>
      </div>
      <br/>
    
      <video className="myvideo" controls>
      <source src={myVideo} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
