import '../styles/footer.css';
import { GoMarkGithub } from 'react-icons/go';
import { ImMail4 } from 'react-icons/im';
import { BsLinkedin, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { Link } from "react-scroll";

const FooterComponent = () => {
  return (
    <div id='footer'>
      <section id="contact">
        <h1>Contato</h1>
        <div className="container">
          <div className="form-contact">
            <form>
              <label>
                Name:
                <input type="text" required />
              </label>
              <label>
                E-mail:
                <input type="email" required />
              </label>
              <label>
                Mensagem:
                <textarea rows="6" required />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="social-networks">
            <h3>Redes Sociais</h3>
            <div className='social-icons'>   
              <a href='mailto:mc.fialho1@gmail.com'><ImMail4 /></a>           
              <a href='https://www.linkedin.com/in/dev-mario-cesar/'><BsLinkedin /></a>
              <a href='https://github.com/MarioCesarCF'><GoMarkGithub /></a>
              <a href='https://github.com/MarioCesarCF'><GrInstagram /></a>
            </div>           
          </div>
        </div>
      </section>
      <Link to='header' spy={true} smooth={true} offset={-20} duration={1500}id='btn-top'><BsFillArrowUpCircleFill /></Link>
      <div>
        <p>Made with <span id='heart'>&#10084;</span> by MarioCesar_Dev</p>
        
      </div>
      
    </div>
  )
}

export default FooterComponent;