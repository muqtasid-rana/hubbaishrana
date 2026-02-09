import { useState } from 'react';
import {
    FaEnvelope,
    FaLinkedinIn,
    FaBehance,
    FaInstagram,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhone
} from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Contact.css';

const socialLinks = [
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hubbaish-rana-6042a0375/', color: '#0A66C2' },
    { icon: FaBehance, label: 'Behance', href: 'https://www.behance.net/hubbaishrana01', color: '#1769FF' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/hubbaishrana', color: '#E4405F' },
    { icon: FaEnvelope, label: 'Gmail', href: 'mailto:hubbaishrana@gmail.com', color: '#EA4335' },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:hubbaishrana@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

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
                            I'm always excited to work on new design projects and collaborate with
                            innovative teams. Whether you need a web design, app design, ad creatives,
                            or just want to say hi — feel free to reach out!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:hubbaishrana@gmail.com">hubbaishrana@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <div>
                                    <span className="contact-label">Phone</span>
                                    <a href="tel:+923129714470">+92 312 9714470</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <span className="contact-label">Location</span>
                                    <span>Islamabad, Pakistan</span>
                                </div>
                            </div>
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

                    <div className="contact-form-section">
                        <h3>Send me a message</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <Button type="submit" size="lg" icon={<FaPaperPlane />}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
