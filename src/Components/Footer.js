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
            <p>LinkedIn</p>
            <p>Gmail</p>
            <p>Github</p>
            <p>Instagram</p>
            </div>           
          </div>
        </div>
      </section>
      <div>
        <h3>Made with S2 by Mario_Cesar_Dev</h3>
      </div>
    </div>
  )
}

export default FooterComponent;