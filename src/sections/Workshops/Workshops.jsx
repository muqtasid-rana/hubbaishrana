import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { workshopsAttended } from '../../data/workshops';
import './Workshops.css';

const Workshops = () => {
    return (
        <section id="workshops" className="workshops section">
            <div className="container">
                <SectionTitle
                    title="Events I Attended"
                    subtitle="Networking & Learning"
                />

                {/* Workshops Attended */}
                <div className="workshops-category">
                    <div className="workshops-grid attended-grid">
                        {workshopsAttended.map((workshop, index) => (
                            <article
                                key={workshop.id}
                                className="workshop-card workshop-attended"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="workshop-image">
                                    <img src={workshop.image} alt={workshop.title} />
                                </div>
                                <div className="workshop-content">
                                    <span className="workshop-org">{workshop.organization}</span>
                                    <h4 className="workshop-title">{workshop.title}</h4>
                                    <p className="workshop-desc">{workshop.description}</p>
                                    <span className="workshop-date">{workshop.date}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workshops;
