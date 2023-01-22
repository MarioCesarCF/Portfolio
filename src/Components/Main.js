import imgMain from "../assets/coding.gif";
import '../styles/main.css';
// import curriculo from "../assets/CV_MarioCesar.pdf";
import { Link } from "react-scroll";
// import teamworkIcon from "../assets/teamwork.png";
// import conversationIcon from "../assets/conversation.png";
import idiomasIcon from "../assets/idiomas.png";
// import adaptacaoIcon from "../assets/adaptacao.png";
import { FiExternalLink } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc';

const MainComponent = () => {
  return (
    <div>
      <main>
        <h1>Meu Portfólio</h1>
        <section id="about">
          <div className="container-text">
            <h2>Sobre mim</h2>
            <div className='text-about'>
            <p>Trabalho desde 2011 no setor público, nas áreas de meio ambiente e saúde.</p>

            <p>Desde 2022 iniciei minha transição de Carreira para TI. Faço graduação em Tecnologia em Sistemas de Internet pelo Instituto Federal do Espírito Santo, participei do bootcamp Tech Academy da StartSe e meus estudos focam em Javascript, React, NodeJS, Bootstrap, MongoDB, PostgreSQL e AWS.</p>

            <p>Tenho interesse em atuar como Desenvolvedor Web Full Stack.</p>



              {/* <p>Olá, me chamo Mário Cesar. Sou um cara caseiro e apaixonado por tecnologia. Gosto de criar coisas e resolver problemas. Este é meu portfólio, seja bem vindo!

              </p>
              <p>Ingressei na área de TI no ano de 2021 e desde então aprendi bastante, estou cursando a graduação em Tecnologia em Sistemas de Internet e muito feliz e animado com meu progresso. Meus estudos estão focados em: Javascript, React, NodeJS, NestJS, Bootstrap, MongoDB, PostgreSQL, Arquitetura de Software e Code Review.</p>

              <p>Para desenvolvimento de softskills trabalho com minha equipe, a TechTeam, em projetos em conjunto, onde aperfeiçoamos habilidades como organização, liderança e comunicação.</p> */}
            </div>
          </div>
          <div>
            <img src={imgMain} alt="" />
          </div>

        </section>
        <div className="buttons">
          <Link to='contact' id="getInTouch" spy={true} smooth={true} offset={0} duration={1500}>Entre em contato</Link>

          <a href='https://docs.google.com/document/d/1SNH2cVGafoNepDD6Szwa4GLPl_eZwK9W4oV7_z-i27s/edit?usp=sharing' id="downloadCV" target='_blanck'>Curriculum Vitae</a>
        </div>
        <section id="skills">
          <h2>Habilidades</h2>
          <div className='listas'>

            <ul className="lista">
              <li className="habilidade">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
                Javascript <span>Intermediário</span></li>
              <li className="habilidade">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                HTML<span>Intermediário</span></li>
              <li className="habilidade">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
                CSS<span>Intermediário</span></li>
              <li className="habilidade">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                React.JS<span>Iniciante</span></li>
              <li className="habilidade">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                NodeJS<span>Intermediário</span></li>
              <li className="habilidade">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
                MongoDB<span>Iniciante</span></li>
              <li className="habilidade">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
                GIT<span>Intermediário</span></li>
                <li className="habilidade">
                  <img src={idiomasIcon} alt="" />Inglês<span>Intermediário</span></li>
            </ul>

            {/* <ul className="lista">
              <li className="habilidade"><img src={teamworkIcon} alt="" />Trabalho em Equipe<span>9/10</span></li>
              <li className="habilidade"><img src={conversationIcon} alt="" />Comunicação<span>7.5/10</span></li>
              <li className="habilidade"><img src={adaptacaoIcon} alt="" />Adaptabilidade<span>8/10</span></li>
              
            </ul> */}

          </div>
        </section>
        <section id="projects">
          <h2>Projetos</h2>
          <div className='projetos'>
            <div className='projeto'>
              <div id="projeto1"></div>
              <div>
                <h2>Brasileirismo</h2>
                <p>A página do Brasileirismo foi um projeto idealizado por um grupo de estudantes de programação durante o Tech Academy da StartSe, com objetivo de mostrar alguns pontos turísticos interessantes de oitos estados brasileiros. Habilidades utilizadas e aperfeiçoadas: HTML, CSS, Javascript e Git/GitHub.</p>
                <a href='https://mariocesarcf.github.io/ProjetoDev/' target='_blanck' className="icon-links"><FiExternalLink /></a>
                <a href='https://github.com/MarioCesarCF/ProjetoDev' target='_blanck' className="icon-links"><VscGithub /></a>
              </div>

            </div>
            <div className='projeto' >
              <div id="projeto2"></div>
              <div>
                <h2>Sustenta-Tech</h2>
                <p>Durante o hackathon do Tech Academy a equipe desenvolveu o projeto Sustenta-Tech. A ideia principal era criar uma plataforma online onde produtores de resíduos orgânicos possam se comunicar com parceiros recicladores desses resíduos. Habilidades utilizadas e aperfeiçoadas: HTML, CSS, Javascript, Git/GitHub, NodeJS e MySQL.

                </p>
                <a href='https://mariocesarcf.github.io/TechTeamProject/' target='_blanck' className="icon-links"><FiExternalLink /></a>
                <a href='https://github.com/MarioCesarCF/TechTeamProject' target='_blanck' className="icon-links"><VscGithub /></a>
              </div>

            </div>
            <div className='projeto'>
              <div id="projeto3"></div>
              <div>
                <h2>Gênio Quiz</h2>
                <p>Este Gênio Quiz foi desenvolvido como um desafio para os alunos do 4º ano 1 da Escola Municipal de Ensino Fundamental “Dr. Bolivar de Abreu”, além de explorar os conteúdos passados em sala de aula, algumas perguntas foram baseadas em assuntos diversos e divertidos. O projeto tem com inspiração o Gênio Quiz de André Birnfeld.

                </p>
                <a href='https://mariocesarcf.github.io/Genio-Quiz-4-Ano/' target='_blanck' className="icon-links"><FiExternalLink /></a>
                <a href='https://github.com/MarioCesarCF/Genio-Quiz-4-Ano' target='_blanck' className="icon-links"><VscGithub /></a>
              </div>

            </div>
            <div className='projeto'>
              <h2>Em breve...</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MainComponent;