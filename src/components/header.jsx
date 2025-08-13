import '../scss/header.scss'
import LogoED from '../assets/LogoED.svg'
import { useEffect } from 'react'

export default function Header() {

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]')
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()
                const target = document.querySelector(link.getAttribute('href'))
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            })
        })
    }, [])

    return (
        <header>
            <img src={LogoED} alt="Logo ElvenDoher" />
            <nav>
                <ul>
                    <li>
                        <a href="#competences">Compétences</a>
                        <div id="hover"></div>
                    </li>
                    <li>
                        <a href="#apropos">A propos</a>
                        <div id="hover"></div>
                    </li>
                    <li>
                        <a href="#projets">Projets</a>
                        <div id="hover"></div>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                        <div id="hover"></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
