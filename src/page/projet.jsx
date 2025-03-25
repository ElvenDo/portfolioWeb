import '../scss/pageProjet.scss'
import { Link, useParams } from 'react-router-dom'
import content from '../data/content'
import Footer from '../components/Footer'
import LogoED from '../assets/LogoED.svg'
export default function Projet() {
    const { slug } = useParams();
    const project = content.find((proj) => proj.slug === slug);

    if (!project) {
        return <h1>Projet inexistant</h1>;
    }
    const retourArriere = (e) => {
        e.preventDefault();
        window.history.back();
    };
    return (
        <>
            <header>
                <img src={LogoED} alt="Logo ElvenDoher" />
                <p><Link className='link' to="/" onClick={retourArriere}>Projets </Link>/{slug}</p>
            </header>
            <main>
                <div className="button">
                    <Link className='link' to="/" onClick={retourArriere}>Retour aux projets</Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
