import React from 'react';
import './App.css';
// import ParticlesBg from 'particles-bg'
import Navigation from './Components/Navigation/Navigation';
import 'tachyons'
import { Component } from 'react';

import Logo from './Components/Logo/Logo';
import ImageLinkFrom from './Components/ImageLinkFrom/ImageLinkFrom';
import Rank from './Components/Rank/Rank';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkFrom/> 
           {/* <FaceRecognition/> */}
        
      </div>
    );
  }
}

export default App;
