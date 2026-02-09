import { FaLinkedinIn, FaBehance, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <a href="#home" className="footer-logo">
                        H<span>.</span>
                    </a>

                    <div className="footer-socials">
                        <a
                            href="https://www.linkedin.com/in/hubbaish-rana-6042a0375/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://www.behance.net/hubbaishrana01"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Behance"
                        >
                            <FaBehance />
                        </a>
                        <a
                            href="https://instagram.com/hubbaishrana"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="mailto:hubbaishrana@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Gmail"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} M.Hubbaish Rana. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
