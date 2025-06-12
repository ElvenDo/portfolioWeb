import '../scss/header.scss'
import LogoED from '../assets/LogoED.svg'

export default function Header() {
    return (
        <header>
            <img src={LogoED} alt="Logo ElvenDoher" />
            <nav>
                <ul>
                    <li><a href="#competences">Compétences</a><div id="hover"></div></li>
                    <li><a href="#apropos">A propos</a><div id="hover"></div></li>
                    <li><a href="#projets">Projets</a><div id="hover"></div></li>
                    <li><a href="#contact">Contat</a><div id="hover"></div></li>
                </ul>
            </nav>
        </header>
    )

}