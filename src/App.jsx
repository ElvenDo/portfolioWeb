import LogoED from './assets/LogoED.svg'
import imageSub from './assets/AdobeStock_968627268.jpeg'
import './scss/App.scss'
import logoInstagram from './assets/icons/instagram.svg'
import logoGithub from './assets/icons/github.svg'
import logoLinkedin from './assets/icons/linkedin.svg'
import { TypeAnimation } from 'react-type-animation'

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
      <section>
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
        <div className="about-section">
          <div className="title">
            <h1>A propos</h1>
            <div className="trait">
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

