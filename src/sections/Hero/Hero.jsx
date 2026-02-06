import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import './Hero.css';

const roles = [
    'Software Engineer',
    'Mobile App Developer',
    'Web Developer',
    'UI/UX Designer',
    'Content Creator'
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
                        M.Muqtasid Rana
                        <span className="hero-subtitle">Mobile App Developer</span>
                    </h1>

                    <div className="hero-roles fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <span className="hero-role">{roles[currentRole]}</span>
                    </div>

                    <p className="hero-description fade-in-up" style={{ animationDelay: '0.4s' }}>
                        I specialize in building premium mobile applications with Flutter,
                        creating modern web solutions with React, and delivering software
                        that drives real business results. Currently building my own SaaS
                        while helping startups and businesses bring their ideas to life.
                    </p>

                    <div className="hero-actions fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <Button
                            href="https://calendly.com/mmuqtasidrana/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                        >
                            Book a Free Call
                        </Button>

                        <div className="hero-socials">
                            <a
                                href="https://instagram.com/muqtasid_devvv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://linkedin.comin/muqtasid-rana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/muqtasid-rana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://youtube.com/@muqtasidrana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"

                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-media fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="video-wrapper">
                        <div className="video-container">
                            {/* Replace with actual YouTube embed URL */}
                            <iframe
                                src="https://www.youtube.com/embed/hL84KLX0kaY?si=yzuMtwMjlxTedlqi"
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
