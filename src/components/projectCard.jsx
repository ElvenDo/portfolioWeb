import '../scss/projectcard.scss';

export default function projectcard({ image, tag, title, description }) {
    return (
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
    )
}
