import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import './Header.css';

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <nav className="nav-desktop">
                    <a
                        href="#home"
                        className="logo"
                        onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    >
                        <span className="logo-text">H</span>
                        <span className="logo-dot">.</span>
                    </a>

                    <div className="nav-links">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="nav-link"
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {link.label}
                                <span className="nav-link-indicator"></span>
                            </a>
                        ))}
                    </div>

                    <Button
                        href="https://wa.me/923129714470"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        className="header-cta"
                    >
                        Book a Free Meeting
                    </Button>
                </nav>

                {/* Mobile Logo */}
                <a
                    href="#home"
                    className="logo-mobile"
                    onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                >
                    <span className="logo-text">H</span>
                    <span className="logo-dot">.</span>
                </a>

                <div className="header-actions-mobile">
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="nav-mobile">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="nav-link-mobile"
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        href="https://wa.me/923129714470"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                        className="mobile-cta"
                    >
                        Book a Free Meeting
                    </Button>
                </nav>
            )}
        </header>
    );
};

export default Header;
