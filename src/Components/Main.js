import imgMain from "../assets/team-work3.png";
import '../styles/main.css'

const MainComponent = () => {
  return (
    <div>
      <main>
        <h1>Meu Portfólio</h1>
        <section id="about">
          <div>
            <h1>Sobre mim</h1>
            <div className='text-about'>
              <p>Sou um cara de família. Gosto de ficar em casa e curtir com meus filhos, minha esposa e alguns poucos,
                mas ótimos, amigos. Estou focado em conseguir mais qualidade de vida para minha família.</p>
              <p> Trabalho desde 2011 no setor público, nas áreas de meio ambiente e saúde, mas há quase dois anos recebi
                bastante apoio de alguns amigos para fazer transição de carreira e ingressar na área de  Tecnologia da Informação. Então comecei a estudar e logo fiquei fascinado por desenvolvimento web! </p>
              <p>Me dedico aos estudos constantemente e me sinto cada vez mais preparado. Estou cursando a graduação em Tecnologia em Sistemas para Internet - TSI pelo IFES/UNAC. Além da graduação foco meus estudos em Javascript, React, NodeJS, Sass, Bootstrap, MongoDB e PostgreSQL.</p>
              <p>Para aperfeiçoamento de softskills trabalho com minha equipe, a TechTeam, em projetos em conjunto, onde aperfeiçoamos habilidades como organização, liderança, comunicação e uso de outras tecnologias que nos ajudam na elaboração dos trabalhos. Inclusive fomos campeões de um hackathon graças a essas habilidades.</p>
            </div>
          </div>
          <div>
          <img src={imgMain} alt="" />
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
          <div className='projetos'>
            <div className='projeto'>
              <h2>Brasileirismo</h2>
              <p>Resumo do projeto</p>
              <p>Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
              </p>
              <a href='https://mariocesarcf.github.io/ProjetoDev/' target='_blanck'>Deploy</a>
              <a href='https://github.com/MarioCesarCF/ProjetoDev' target='_blanck'>Repositório</a>
            </div>
            <div className='projeto'>
              <h2>Sustenta-Tech</h2>
              <p>Resumo do projeto</p>
              <p>Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
              </p>
              <a href='https://mariocesarcf.github.io/TechTeamProject/' target='_blanck'>Deploy</a>
              <a href='https://github.com/MarioCesarCF/TechTeamProject' target='_blanck'>Repositório</a>
            </div>
            <div className='projeto'>
              <h2>Gênio Quiz</h2>
              <p>Resumo do projeto</p>
              <p>Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
              </p>
              <a href='https://mariocesarcf.github.io/Genio-Quiz-4-Ano/' target='_blanck'>Deploy</a>
              <a href='https://github.com/MarioCesarCF/Genio-Quiz-4-Ano' target='_blanck'>Repositório</a>
            </div>
            <div className='projeto'>
              <h2>Projeto4</h2>
              <p>Resumo do projeto</p>
              <p>Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
              </p>

            </div>
            <div className='projeto'>
              <h2>Projeto5</h2>
              <p>Resumo do projeto</p>
              <p>Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
              </p>

            </div>
            <div className='projeto'>
              <h2>Projeto6</h2>
              <p>Resumo do projeto</p>
              <p>Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
                Texto falando do projeto, umas 5 a 10 linhas
              </p>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MainComponent;