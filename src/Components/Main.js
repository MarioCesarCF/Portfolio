import imgMain from "../assets/coding.gif";
import '../styles/main.css'

const MainComponent = () => {
  return (
    <div>
      <main>
        <h1>Meu Portfólio</h1>
        <section id="about">
          <div>
            <h2>Sobre mim</h2>
            <div className='text-about'>
              <p>Olá, me chamo Mário Cesar e este é meu portfólio. Seja bem vindo!
                Sou um cara caseiro e apaixonado por tecnologia. Gosto de criar coisas e resolver problemas.
              </p>
              <p>Ingressei na área de TI no ano de 2021 e desde então aprendi bastante, estou cursando a graduação em Tecnologia em Sistemas de Internet e muito feliz e animado com meu progresso. Meus estudos estão focados em: Javascript, React, NodeJS, NestJS, Bootstrap, MongoDB, PostgreSQL, Arquitetura de Software e Code Review.</p>

              <p>Para desenvolvimento de softskills trabalho com minha equipe, a TechTeam, em projetos em conjunto, onde aperfeiçoamos habilidades como organização, liderança e comunicação.</p>
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