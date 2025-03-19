import imageSub from './assets/AdobeStock_968627268.jpeg'
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
const JobTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        'Un Ux/Ui designer', 2000,
        'Un Développeur', 2000,
        'Un WebDesigner', 2000,
        'Un Graphiste', 2000
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
          <img src={imageSub} alt="" />
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
            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <div className="section-image">
              <img src={coinHaut} className="fond" id="haut" alt="" />
              <img src={imageMoi} className="img" alt="" />
              <img src={coinBas} className="fond" id="bas" alt="" />
            </div>
          </div>
        </div>
      </section >
      
    </>
  )
}

