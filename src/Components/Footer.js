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
        <div className="container">
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
            <div className='social-icons'>   
              <a href='mailto:mc.fialho1@gmail.com'><ImMail4 /></a>           
              <a href='https://www.linkedin.com/in/dev-mario-cesar/'><BsLinkedin /></a>
              <a href='https://github.com/MarioCesarCF'><GoMarkGithub /></a>
              <a href='https://github.com/MarioCesarCF'><GrInstagram /></a>
            </div>           
          </div>
        </div>
      </section>
      <div>
        <p>Made with <span id='heart'>&#10084;</span> by MarioCesar_Dev</p>
      </div>
    </div>
  )
}

export default FooterComponent;