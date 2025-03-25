import '../scss/pageProjet.scss'
import { Link, useParams } from 'react-router-dom'
import content from '../data/content'

export default function Projet() {
    const { slug } = useParams();
    const project = content.find((proj) => proj.slug === slug);

    if (!project) {
        return <h1>Projet inexistant</h1>;
    }

    return (
        <>
            <Link to="/#projets">Retour</Link>
            <div className='test'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
        </>
    );
}
