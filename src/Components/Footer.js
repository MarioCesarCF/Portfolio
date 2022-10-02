import '../styles/footer.css';
import { GoMarkGithub } from 'react-icons/go';
import { ImMail4 } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

const FooterComponent = () => {
  return (
    <div>
      <section id="contact">
        <h1>Contato</h1>
        <div className="contact">
          <div className="form-contact">
            <form>
              <label>
                Name:
                <input type="text" placeholder='nome' value='' />
              </label>
              <label>
                E-mail:
                <input type="email" placeholder='e-mail' value='' />
              </label>
              <label>
                Mensagem:
                <textarea value='' />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="social-networks">
            <h3>Redes Sociais</h3>
            <div>   
              <a href='mailto:mc.fialho1@gmail.com'><ImMail4 size={50} color="#42cd07" /></a>           
              <a href='https://www.linkedin.com/in/dev-mario-cesar/'><BsLinkedin size={50} color="#42cd07" /></a>
              <a href='https://github.com/MarioCesarCF'><GoMarkGithub size={50} color="#42cd07" /></a>
              <a href='https://github.com/MarioCesarCF'><GrInstagram size={50} color="#42cd07" /></a>
            
                        
            </div>           
          </div>
        </div>
      </section>
      <div>
        <h4>Made with S2 by MarioCesar_Dev</h4>
      </div>
    </div>
  )
}

export default FooterComponent;