import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { certificates } from '../../data/certificates';
import './Certificates.css';

const Certificates = () => {
    return (
        <section id="certificates" className="certificates section">
            <div className="container">
                <SectionTitle
                    title="Certificates"
                    subtitle="Professional Credentials"
                />

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <article
                            key={cert.id}
                            className="certificate-card"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="certificate-content">
                                <h4 className="certificate-title">{cert.title}</h4>
                                <span className="certificate-issuer">{cert.issuer}</span>
                                <p className="certificate-desc">{cert.description}</p>
                                <span className="certificate-date">{cert.date}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
