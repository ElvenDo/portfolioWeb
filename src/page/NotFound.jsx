import { Link } from 'react-router-dom';
import '../scss/notfound.scss';
import error from '../assets/Error.svg'; // Assurez-vous que le chemin d'accès à l'image est correct

export default function NotFound() {
    return (
        <div className="not-found">
            <img src={error} alt="" />
                <h1>Oups ! Page non trouvée</h1>
                <p>La page que vous recherchez n'existe pas.</p>
                <Link to="/" className="retour">
                    Retour à l'accueil
                </Link>
        </div>
    );
}