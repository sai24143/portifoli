import './Footer.css';

import git from '../img/github.png';
import insta from '../img/instagram.png';
import linkedin from '../img/linkedin.png';

const Footer = () => {
  return (
    <div div className='footer'id='Footer'  style={{top:'5rem'}}>
      <div className='wav'>
      <div className='f-page'>
      <div className='contact'>
      <span>
      +912699672 <br/><br/>
      sumanth24143@gmail.com
      </span>
      </div>
      <div className='f-icons'>
      <a href="https://github.com/sai24143"> <img src={git} alt="git" /></a>
      
      <img src={insta} alt="insta"  />
      
       <a href="https://github.com/sai24143"> <img src={linkedin} alt="git" style={{}} /></a>
      
     

      </div>

      

      

      </div>
       

      

     



      </div>
       
       
       
    </div>

  )
}

export default Footer
