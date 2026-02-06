import { FaGooglePlay, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SmallProjectCard from '../../components/SmallProjectCard/SmallProjectCard';
import Button from '../../components/Button/Button';
import { featuredProjects, playStoreApp, mainProjects, smallProjects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
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
                            icon={<FaExternalLinkAlt />}
                        >
                            View on Play Store
                        </Button>
                    </div>

                    <div className="playstore-image">
                        <div
                            className="playstore-placeholder"
                            style={{
                                background: 'linear-gradient(135deg, #1a1a3e 0%, #0f0f2e 100%)'
                            }}
                        >
                            <span className="app-icon">☪</span>
                        </div>
                    </div>
                </div>

                {/* Other Main Projects */}
                <div className="other-projects-header">
                    <h3>More Projects</h3>
                    <p>A selection of other projects I've worked on</p>
                </div>

                <div className="other-projects-grid">
                    {mainProjects.slice(0, 6).map((project, index) => (
                        <SmallProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Small Projects */}
                <div className="small-projects-header">
                    <h3>UI/UX & Practice Projects</h3>
                </div>

                <div className="small-projects-grid">
                    {smallProjects.map((project, index) => (
                        <SmallProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
