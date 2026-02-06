import {
    FaEnvelope,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaMapMarkerAlt
} from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Contact.css';

const socialLinks = [
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/in/muqtasid-rana', color: '#0A66C2' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/muqtasid-rana', color: '#FFFFFF' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/muqtasid_devvv', color: '#E4405F' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@muqtasidrana', color: '#FF0000' },
    // { icon: FaTwitter, label: 'Twitter/X', href: 'https://twitter.com/muqtasidrana', color: '#1DA1F2' }
];

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Contact Me"
                />

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's work together</h3>
                        <p>
                            I'm always excited to work on new projects and collaborate with
                            innovative teams. Whether you need a mobile app, web solution,
                            or just want to say hi — feel free to reach out!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:mmuqtasidrana@gmail.com">mmuqtasidrana@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <span className="contact-label">Location</span>
                                    <span>Pakistan</span>
                                </div>
                            </div>
                        </div>

                        <Button
                            href="https://calendly.com/mmuqtasidrana/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                        >
                            Schedule a Meeting
                        </Button>
                    </div>

                    <div className="social-section">
                        <h4>Connect with me</h4>
                        <div className="social-grid">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-card"
                                >
                                    <social.icon
                                        className="social-card-icon"
                                        style={{ color: social.color }}
                                    />
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
