import React from "react";

import Tilt from 'react-parallax-tilt';
import './logo.css'

const Logo = ()=>{
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-3 " option={{max:70}} style={{ height: '10em',width:'10em',display: 'flex',justifyContent: 'flex-start' }}> 
                <div >
                    <img  style={{height:'5em',width:'30em',paddingTop:'2.5em' }}  src= "https://cdn.pixabay.com/photo/2022/12/08/06/39/artificial-7642628__340.png" alt="SmartBrain"/>

                </div>
            </Tilt>
        </div>
        
       
    )
}
export default Logo;
// Tilt br2 shadow-2 
// Tilt-inner pa3 
// style={{height:'123px',width:'30em', marginBottom:'3em' }}