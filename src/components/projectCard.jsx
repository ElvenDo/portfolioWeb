import '../scss/projectcard.scss';
import { Link } from 'react-router-dom'

export default function Projectcard({ slug, image, tag, title, description }) {
    return (
        <Link to={`/projets/${slug}`} className='cardLink'>
            <div className="card">
                <div className="imageWrapper">
                    <img src={image} alt="imageProjet" />
                </div>
                <span>
                    <div className="tagContainer">
                        <div className="tagContainer">
                            {tag.map((tags, index) => (
                                <span key={index} className={`tag tag-${tags.toLowerCase()}`}>
                                    {tags}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p id="title">{title}</p>
                    <p id="description">{description}</p>
                </span>
            </div>
        </Link>
    )
}
