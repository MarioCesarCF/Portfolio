import logo from '../assets/LOGO2.png';
import { Link } from "react-scroll";
import '../styles/header.css'


const HeaderComponent = () => {
  return (
    <div>      
      <header>
      <img className="logo" src={logo} alt="" />
        {/* <div className='name_title'>
          <h1>Mário Cesar</h1>
          <h2>Web Developer</h2>
        </div>
         */}
        
        <div className='nav'>
          <Link to="about" spy={true} smooth={true} offset={-20} duration={500}><h2>About</h2></Link>
          <Link to="skills" spy={true} smooth={true} offset={-20} duration={750}><h2>Skills</h2></Link>
          <Link to='projects' spy={true} smooth={true} offset={-20} duration={1000}><h2>Projects</h2></Link>
          <Link to='contact' spy={true} smooth={true} offset={-20} duration={1500}><h2>Contact</h2></Link>
        </div>        
      </header>
    </div>
  )
}

export default HeaderComponent;