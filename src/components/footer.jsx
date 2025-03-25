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
                    <img src={linkedinIcon} alt="linkedinIcon" />
                    <img src={instaIcon} alt="iconInsta" />
                    <img src={gitIcon} alt="gitHubicon" />
                </div>
            </div>
        </footer>
    )
}