import './SmallProjectCard.css';

const SmallProjectCard = ({ project, index = 0 }) => {
    const { title, description, image, tags } = project;

    return (
        <article className="small-project-card">
            <div className="small-project-image">
                {image ? (
                    <img src={image} alt={title} className="small-project-img" />
                ) : (
                    <div
                        className="small-project-placeholder"
                        style={{
                            background: `linear-gradient(135deg, 
                hsl(${200 + index * 15}, 65%, 22%) 0%, 
                hsl(${240 + index * 15}, 55%, 18%) 100%)`
                        }}
                    >
                        <span className="small-placeholder-icon">
                            {title.charAt(0)}
                        </span>
                    </div>
                )}
            </div>

            <div className="small-project-content">
                <h4 className="small-project-title">{title}</h4>
                <p className="small-project-desc">{description}</p>

                {tags && (
                    <div className="small-project-tags">
                        {tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="small-tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
};

export default SmallProjectCard;
