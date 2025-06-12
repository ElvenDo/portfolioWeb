import '../scss/pageProjet.scss'
import { useEffect } from 'react';

import { Link, useParams, Navigate } from 'react-router-dom'
import content from '../data/content'
import LogoED from '../assets/LogoED.svg'
import cssIcon from '../assets/icons/css.svg'
import figmaIcon from '../assets/icons/figma.svg'
import illustratorIcon from '../assets/icons/illustrator.svg'
import photoshopIcon from '../assets/icons/photoshop.svg'
import afterEffectIcon from '../assets/icons/afterEffect.svg'
import coinHaut from '../assets/coinHautDroit.svg'
import coinBas from '../assets/coinBasGauche.svg'
import Footer from '../components/Footer.jsx';
export default function Projet() {
    const { slug } = useParams();
    const project = content.find((proj) => proj.slug === slug);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    if (!project) {
        return <Navigate to="/404" />;
    }
    const retourArriere = (e) => {
        e.preventDefault();
        window.history.back();
    };
    const tagToIcon = {
        Photoshop: photoshopIcon,
        Illustrator: illustratorIcon,
        AfterEffect: afterEffectIcon,
        Figma: figmaIcon,
        CSS: cssIcon,
    };

    return (
        <>
            <header>
                <img src={LogoED} alt="Logo ElvenDoher" />
                <p><Link className='link' to="/" onClick={retourArriere}>Projets </Link> &gt; {slug}</p>
            </header>
            <main>
                <Link className='linkbuton' to="/" onClick={retourArriere}>&larr; Retour</Link>
                <div className="titleContainer">
                    <div className="imgContainer">
                        <img src={project.image} alt="" />
                    </div>
                    <div className="title">
                        <div className="titreContainer">
                            <h1>{project.title}</h1>
                            <div className="trait"></div>
                        </div>
                        <div className="iconContainer">
                            {project.tag.map((tag, index) => (
                                <img key={index} src={tagToIcon[tag]} alt={tag} className="icon" />
                            ))}
                        </div>
                        <a className="pdf" href={project.projet1} target="_blank" rel="noopener noreferrer">
                            Voir le projet
                        </a>
                    </div>
                </div>
                <p>{project.paragraph1}</p>
                <div className="container2">
                    <p>{project.paragraph2}</p>
                    <div className="imageContainer">
                        <img src={coinHaut} className="fond" id="haut" alt="" />
                        <div className="imgWrapper">
                            <img src={project.image2} alt="" />
                        </div>
                        <img src={coinBas} className="fond" id="bas" alt="" />
                    </div>
                </div>
                <div className="container2">
                    <div className="imageContainer">
                        <img src={coinHaut} className="fond" id="haut" alt="" />
                        <div className="imgWrapper">
                            <img src={project.image3} alt="" />
                        </div>
                        <img src={coinBas} className="fond" id="bas" alt="" />
                    </div>
                    <p>{project.paragraph3}</p>

                </div>
                <div className="container2">
                    <p>{project.paragraph4}</p>
                    <div className="imageContainer">
                        <img src={coinHaut} className="fond" id="haut" alt="" />
                        <div className="imgWrapper">
                            <img src={project.image4} alt="" />
                        </div>
                        <img src={coinBas} className="fond" id="bas" alt="" />
                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
}
