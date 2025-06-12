import '../scss/footer.scss'
import LogoED from '../assets/LogoED.svg'
import instaIcon from '../assets/icons/instagram(Noir).svg'
import linkedinIcon from '../assets/icons/linkedin(Noir).svg'
import gitIcon from '../assets/icons/git(Noir).svg'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="logoContainer">
                    <img src={LogoED} alt="Logo ElvenDoher" />
                    <p>Elven Doher</p>
                </div>
                <div className="socialContainer">
                    <a href='https://www.linkedin.com/in/elven-doher/' target='_blank'><img src={linkedinIcon}></img></a>
                    <a href='https://www.instagram.com/elven.dhr?igsh=Z2x1NmVmNzNtMWpq' target='_blank'><img src={instaIcon}></img></a>
                    <a href='https://github.com/ElvenDo' target='_blank'><img src={gitIcon}></img></a>
                </div>
            </div>
        </footer>
    )
}