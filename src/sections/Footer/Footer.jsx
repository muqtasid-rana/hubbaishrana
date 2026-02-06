import { FaLinkedinIn, FaGithub, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <a href="#home" className="footer-logo">
                        M<span>.</span>
                    </a>

                    <div className="footer-socials">
                        <a
                            href="https://linkedin.comin/muqtasid-rana"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://github.com/muqtasid-rana"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://instagram.com/muqtasid_devvv"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://youtube.com/@muqtasidrana"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} M.Muqtasid Rana. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
