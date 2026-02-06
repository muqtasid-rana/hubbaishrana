import './ProjectCard.css';

const ProjectCard = ({ project, index = 0, variant = 'featured' }) => {
    const { title, description, image, caseStudy, tags } = project;

    return (
        <article className={`project-card project-card-${variant}`}>
            <div className="project-card-image">
                <div className="project-image-wrapper">
                    {image ? (
                        <img src={image} alt={title} className="project-image" />
                    ) : (
                        <div
                            className="project-image-placeholder"
                            style={{
                                background: `linear-gradient(135deg, 
                  hsl(${220 + index * 20}, 70%, 25%) 0%, 
                  hsl(${260 + index * 20}, 60%, 20%) 100%)`
                            }}
                        >
                            <span className="placeholder-text">{title.split(' ')[0]}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="project-card-content">
                <div className="project-tags">
                    {tags?.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>

                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                {caseStudy && variant === 'featured' && (
                    <div className="project-case-study">
                        <div className="case-study-item">
                            <h4>The Problem</h4>
                            <p>{caseStudy.problem}</p>
                        </div>
                        <div className="case-study-item">
                            <h4>The Solution</h4>
                            <p>{caseStudy.solution}</p>
                        </div>
                        <div className="case-study-item">
                            <h4>Tech Stack</h4>
                            <div className="tech-stack-tags">
                                {caseStudy.techStack?.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="case-study-item case-study-result">
                            <h4>Result</h4>
                            <p>{caseStudy.result}</p>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;
