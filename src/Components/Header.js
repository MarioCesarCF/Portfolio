import logo from '../assets/logo-mc.png';
import { Link } from "react-scroll";
import '../styles/header.css'


const HeaderComponent = () => {
  return (
    <div>      
      <header id='header'>
      <img className="logo" src={logo} alt="" />        
        <div className='nav'>
          <Link to="about" spy={true} smooth={true} offset={-20} duration={500}><h2>Sobre</h2></Link>
          <Link to="skills" spy={true} smooth={true} offset={-20} duration={750}><h2>Habilidades</h2></Link>
          <Link to='projects' spy={true} smooth={true} offset={-20} duration={1000}><h2>Projetos</h2></Link>
          <Link to='contact' spy={true} smooth={true} offset={-20} duration={1500}><h2>Contato</h2></Link>
        </div>        
      </header>
    </div>
  )
}

export default HeaderComponent;