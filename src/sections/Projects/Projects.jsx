import { useState } from 'react';
import { FaGooglePlay, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SmallProjectCard from '../../components/SmallProjectCard/SmallProjectCard';
import Button from '../../components/Button/Button';
import ImageLightbox from '../../components/ImageLightbox/ImageLightbox';
import { featuredProjects, playStoreApp, mainProjects, smallProjects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '', title: '' });

    const openLightbox = (image, title) => {
        setLightbox({ isOpen: true, image, title });
    };

    const closeLightbox = () => {
        setLightbox({ isOpen: false, image: '', title: '' });
    };

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="My Work"
                />

                {/* Featured Projects - Case Studies */}
                <div className="featured-projects">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            variant="featured"
                            onImageClick={() => openLightbox(project.image, project.title)}
                        />
                    ))}
                </div>

                {/* Play Store App */}
                <div className="playstore-feature">
                    <div className="playstore-content">
                        <span className="playstore-badge">
                            <FaGooglePlay /> Published on Play Store
                        </span>
                        <h3>{playStoreApp.title}</h3>
                        <p>{playStoreApp.description}</p>

                        <div className="playstore-case-study">
                            <div className="case-item">
                                <h4>The Challenge</h4>
                                <p>{playStoreApp.caseStudy.problem}</p>
                            </div>
                            <div className="case-item">
                                <h4>The Solution</h4>
                                <p>{playStoreApp.caseStudy.solution}</p>
                            </div>
                        </div>

                        <div className="playstore-tech">
                            {playStoreApp.caseStudy.techStack.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>

                        <Button
                            href={playStoreApp.playStoreUrl}
                            target="_blank"
                        >
                            <FaExternalLinkAlt /> View on Play Store
                        </Button>
                    </div>

                    <div
                        className="playstore-image"
                        onClick={() => openLightbox(playStoreApp.image, playStoreApp.title)}
                        style={{ cursor: 'pointer' }}
                    >
                        {playStoreApp.image ? (
                            <img src={playStoreApp.image} alt={playStoreApp.title} />
                        ) : (
                            <div
                                className="playstore-placeholder"
                                style={{
                                    background: 'linear-gradient(135deg, #1a1a3e 0%, #0f0f2e 100%)'
                                }}
                            >
                                <span className="app-icon">☪</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Other Main Projects */}
                <div className="other-projects-header">
                    <h3>More Projects</h3>
                    <p>A selection of other projects I've worked on</p>
                </div>

                <div className="other-projects-grid">
                    {mainProjects.map((project, index) => (
                        <SmallProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onImageClick={() => openLightbox(project.image, project.title)}
                        />
                    ))}
                </div>

                {/* Small Projects */}


                <div className="small-projects-grid">
                    {smallProjects.map((project, index) => (
                        <SmallProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onImageClick={() => openLightbox(project.image, project.title)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightbox.isOpen && (
                <ImageLightbox
                    image={lightbox.image}
                    title={lightbox.title}
                    onClose={closeLightbox}
                />
            )}
        </section>
    );
};

export default Projects;

