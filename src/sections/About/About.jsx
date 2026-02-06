import SectionTitle from '../../components/SectionTitle/SectionTitle';
import muqtasidPhoto from '../../assets/muqtasid.png';
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
                                I'm a <strong>Flutter-focused Mobile App Developer</strong> and <strong>Software Engineering student</strong>
                                with a passion for building applications that deliver real value. With expertise spanning mobile,
                                web, and backend development, I bring ideas to life through clean code and thoughtful design.
                            </p>
                            <p>
                                Beyond development, I'm a <strong>content creator</strong> sharing my journey and insights with
                                the tech community. I believe in continuous learning and currently have multiple apps published
                                on the Play Store, with more in development.
                            </p>
                            <p>
                                Currently, I'm building <strong>Incorpo</strong> — my own SaaS product that automates the hiring
                                process using AI. My goal is to create software that not only works but delivers measurable
                                results and strong ROI for clients.
                            </p>
                        </div>


                    </div>

                    <div className="about-image fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="image-wrapper">
                            <img
                                src={muqtasidPhoto}
                                alt="M.Muqtasid Rana"
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
