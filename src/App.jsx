import imageHome from './assets/ImageHome.svg'
import './scss/App.scss'
import imageMoi from './assets/MoiImage.jpg'
import Header from './components/Header'
import SkillsCard from './components/skillscard.jsx'
import logoInstagram from './assets/icons/instagram.svg'
import logoGithub from './assets/icons/github.svg'
import logoLinkedin from './assets/icons/linkedin.svg'
import { TypeAnimation } from 'react-type-animation'
import coinHaut from './assets/coinHautGauche.svg'
import coinBas from './assets/coinBasDroit.svg'
import data from './data/skill.js'
import ProjectCard from './components/projectCard.jsx'
import projectData from './data/project.js'
import Footer from './components/Footer'

const JobTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        'Un Ux/Ui designer', 3000,
        'Un Développeur', 3000,
        'Un WebDesigner', 3000,
        'Un Motion designer', 3000
      ]}
      wrapper="h2"
      speed={50}
      repeat={Infinity}
    />
  );
};
export default function App() {
  return (
    <>
      <Header />
        <section className='home'>
          <div className="h2-section">
            <h2>Je suis <span>Doher Elven</span></h2>
            <JobTyping />
            <div className="reseau">
              <div className="trait1"></div>
              <div className="buttonReseau">
                <a href='https://www.linkedin.com/in/elven-doher/' target='_blank'><img src={logoLinkedin}></img></a>
                <a href='https://www.instagram.com/elven.dhr?igsh=Z2x1NmVmNzNtMWpq' target='_blank'><img src={logoInstagram}></img></a>
                <a href='https://github.com/ElvenDo' target='_blank'><img src={logoGithub}></img></a>
              </div>
              <div className="trait2"></div>
            </div>
          </div>
          <div className="img-section">
            <img src={imageHome} alt="" />
          </div>
        </section>
        <section>
          <div className="skill-section" id="competences">
            <div className="title">
              <h1>Mes Compétences</h1>
              <div className="trait"></div>
            </div>
            <div className="container">
              <img src={coinHaut} className="fond" id="haut" alt="" />
              <div className="titreH2">
                <h2>Compétences techniques</h2>
                <div className="traitbleu"></div>
              </div>
              <div className="skill-container">
                {data.reduce((acc, skill, index) => {
                  if (index % 5 === 0) {
                    acc.push([]);
                  }
                  acc[acc.length - 1].push(skill);
                  return acc;
                }, []).map((group, groupIndex) => (
                  <div key={groupIndex} className="skill-row">
                    {group.map((skill, index) => (
                      <SkillsCard key={index} icon={skill.icon} title={skill.title} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="titreH2">
                <h2>Compétences générales</h2>
                <div className="traitbleu"></div>
              </div>
              <div className="skill-gen">
                <p>Curiosité</p>
                <p>Autonomie</p>
                <p>Créativité</p>
                <p>Esprit critique</p>
                <p>Esprit d'équipe</p>
              </div>
              <img src={coinBas} className="fond" id="bas" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="about-section" id="apropos">
            <div className="title">
              <h1>A propos</h1>
              <div className="trait"></div>
            </div>
            <div className="contenu-section">
              <p>Je suis passionné par <b>l’UX/UI design</b>, le <b>motion design / montage vidéo</b> et le <b>développement web</b>. J’aime concevoir des interfaces à la fois esthétiques et intuitives, en mettant l’accent sur l’expérience utilisateur et la fluidité de navigation. Grâce à mes notions en <b>web design</b>, je transforme des idées en créations visuelles percutantes, tout en intégrant les meilleures pratiques du <b>développement web</b>. Toujours en quête d’innovation, j’explore les tendances et les outils actuels pour proposer des solutions numériques adaptées et impactantes.</p>
              <div className="section-image">
                <img src={coinHaut} className="fond" id="haut" alt="" />
                <div className="imageWrapper">
                  <img src={imageMoi} className="img" alt="" />

                </div>
                <img src={coinBas} className="fond" id="bas" alt="" />
              </div>
            </div>
          </div>
        </section >
        <section id="projetsection">
          <div className="project-section" id="projets">
            <div className="title">
              <h1>Mes Projets</h1>
              <div className="trait"></div>
            </div>
            <div className="container">
              <img src={coinHaut} className="fond" id="haut" alt="" />
              <div className="cardContainer">{projectData.map((project, index) => (
                <ProjectCard key={index} slug={project.slug} image={project.image} tag={project.tag} title={project.title} description={project.description} />
              ))}
              </div>
              <img src={coinBas} className="fond" id="bas" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="contact-section" id="contact">
            <div className="title">
              <h1>Me Contacter</h1>
              <div className="trait"></div>
            </div>
            <div className="container">
              <img src={coinHaut} className="fond" id="haut" alt="" />
              <span className="all">
                <div className="infoContainer">
                  <div className="info">
                    <p className="infoParagraph">N’hésitez pas à me contacter si vous avez des questions sur mon parcours ou mes projets.</p>
                  </div>
                  <div className="info">
                    <p className="infoParagraph">Si vous souhaitez que je vous aide sur un projet ou que je vous apporte un regard constructif, je serai ravi d’échanger avec vous.</p>
                  </div>
                  <div className="info">
                    <p className="infoParagraph">Si mes compétences vous intéressent et que je peux les mettre en œuvre au sein de votre entreprise, n’hésitez pas à me contacter.</p>
                  </div>
                </div>
                <a href="mailto:elvendoher38@gmail.com?subject=(Contact Portfolio) **votre objet ici**" className="button">Envoyer un message</a>
              </span>
              <img src={coinBas} className="fond" id="bas" alt="" />
            </div>
          </div>
        </section>
      <Footer />
    </>
  )
}