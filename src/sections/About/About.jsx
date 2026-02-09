import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content fade-in-up">
                        <SectionTitle
                            title="About Me"
                            subtitle="Get To Know"
                            align="left"
                        />

                        <div className="about-text">
                            <p>
                                I'm a <strong>Computer Systems Engineer × UX/UI Designer</strong> working at the
                                intersection of design and AI. I design digital products by combining UX principles,
                                system thinking, and AI-powered workflows to move from idea to high-quality design
                                in days, not weeks.
                            </p>
                            <p>
                                My focus is on <strong>simplifying complex problems</strong>, accelerating design
                                processes, and building <strong>scalable interfaces</strong> for modern products.
                                I'm actively experimenting with AI tools, automation, and rapid prototyping to
                                shape the future of design.
                            </p>
                            <p>
                                Currently, I'm the <strong>Founder of Groflex Technologies</strong> and working as a
                                <strong> User Experience Designer</strong> at Hybrid Mediaworks, bringing innovative
                                design solutions to complex digital challenges.
                            </p>
                        </div>


                    </div>

                    <div className="about-image fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="image-wrapper">
                            <img
                                src="/assets/hub.jpeg"
                                alt="M.Hubbaish Rana"
                                className="profile-photo"
                            />
                            <div className="image-decorations">
                                <span className="deco deco-1"></span>
                                <span className="deco deco-2"></span>
                                <span className="deco deco-3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
