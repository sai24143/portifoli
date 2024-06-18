
import React from "react";
import './About.css'
import Card from '../Card/Card'
import emoji from '../img/glasses.png'

import heart from '../img/heartemoji.png'


const About = () => {
  return (
    <div className='a-page' id="About">
        <div className='a-left'>
        
        
        <div className="a-name">sai  sumanth </div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates, voluptatum dicta doloremque deleniti soluta, ea culpa quae hic minima sit nobis quas, accusamus consectetur sapiente beatae! Reprehenderit, temporibus adipisci.
</span>
<button className="button">
<a href="https://drive.google.com/file/d/1YHEOcc0FXY7-gNOhUy6CVrx-W2MK9TVj/view">Resume </a>
</button>
</div>

        




  
        
        <div className='a-right' >
        <div style={{top:'7rem'}}> <Card  
            img={heart}
            tittle={'desgin'}
            text={'figma,photoshop,adobe'}
        /></div>
         <Card   
            img={emoji}
            tittle={''}
            text={'HTML,CSS,JS,reactjs,etc..'}
        />
        <div style={{top:'7rem'}}> <Card  
            img={heart}
            tittle={''}
            text={'Python,java'}
        /></div>
        </div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
          
          
            
        </div>
    

  )
}

export default About
