import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaBehance, FaEnvelope } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import './Hero.css';

const roles = [
    'UX/UI Designer',
    'Design Technologist',
    'Founder @Groflex',
    'Computer Systems Engineer',
    'AI & UX Specialist'
];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-bg"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-greeting fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Hello, I'm
                    </span>

                    <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
                        M.Hubbaish Rana
                        <span className="hero-subtitle">UX/UI Designer</span>
                    </h1>

                    <div className="hero-roles fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <span className="hero-role">{roles[currentRole]}</span>
                    </div>

                    <p className="hero-description fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Computer Systems Engineer × UX/UI Designer working at the intersection of
                        design and AI. I design digital products by combining UX principles, system
                        thinking, and AI-powered workflows to move from idea to high-quality design
                        in days, not weeks.
                    </p>

                    <div className="hero-actions fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <Button
                            href="https://wa.me/923129714470"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                        >
                            Book a Free Call
                        </Button>

                        <div className="hero-socials">
                            <a
                                href="https://instagram.com/hubbaishrana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hubbaish-rana-6042a0375/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://www.behance.net/hubbaishrana01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Behance"
                            >
                                <FaBehance />
                            </a>
                            <a
                                href="mailto:hubbaishrana@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Gmail"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-media fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="video-wrapper">
                        <div className="video-container">
                            {/* Replace with actual YouTube embed URL */}
                            <iframe
                                src="https://www.youtube.com/embed/Vn2sa5bBMc8?si=5Qodpl8yfU2kPl0j"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-shadow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
