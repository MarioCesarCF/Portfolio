import './App.css';
import logo from './assets/logo-mario.png';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className="logo" src={logo} alt="" />
        <div className='nav'>
          <a href="#about"><h1>About</h1></a>
          <a href="#skills"><h1>Skills</h1></a>
          <a href="#projects"><h1>Projects</h1></a>
          <a href="#contact"><h1>Contact</h1></a>
        </div>
      </div>
      <main>
        <section id="about">
          <h1>Sobre mim</h1>
          <div className='text-about'>
            <p>Sou um cara de família. Gosto de ficar em casa e curtir com meus filhos, minha esposa e alguns poucos,
              mas ótimos, amigos. Estou focado em conseguir mais qualidade de vida para minha família.</p>

            <p> Trabalho desde 2011 no setor público, nas áreas de meio ambiente e saúde, mas há quase dois anos recebi
              bastante apoio de alguns amigos para fazer transição de carreira e ingressar na área de  Tecnologia da Informação. Então comecei a estudar e logo fiquei fascinado por desenvolvimento web! </p>

            <p>Me dedico aos estudos constantemente e me sinto cada vez mais preparado. Estou cursando a graduação em Tecnologia em Sistemas para Internet - TSI pelo IFES/UNAC. Além da graduação foco meus estudos em Javascript, React, NodeJS, Sass, Bootstrap, MongoDB e PostgreSQL.</p>

            <p>Para aperfeiçoamento de softskills trabalho com minha equipe, a TechTeam, em projetos em conjunto, onde aperfeiçoamos habilidades como organização, liderança, comunicação e uso de outras tecnologias que nos ajudam na elaboração dos trabalhos. Inclusive fomos campeões de um hackathon graças a essas habilidades.</p>
          </div>
        </section>
        <section id="skills">
          <h1>Habilidades</h1>
          <div className='listas'>
          <div>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Trabalho em Equipe</li>
              <li>Comunicação</li>
              <li>Adaptabilidade</li>
              <li>Inglês</li>
              <li>Versionamento com GIT</li>
            </ul>
          </div>
          </div>          
        </section>
        <section id="projects">
          <h1>Projetos</h1>
        </section>
        <section id="contact">
          <h1>Contato</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
