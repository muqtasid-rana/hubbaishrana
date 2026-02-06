import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { achievements } from '../../data/achievements';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="achievements section">
            <div className="container">
                <SectionTitle
                    title="Achievements"
                    subtitle="Recognition & Awards"
                />

                {/* Achievements */}
                <div className="achievements-category">
                    <h3 className="category-heading">
                        <span className="heading-icon"></span>
                        My Achievements
                    </h3>
                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <article
                                key={achievement.id}
                                className="achievement-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="achievement-image">
                                    <img src={achievement.image} alt={achievement.title} />
                                    <div className="achievement-overlay">
                                        <span className="position-badge">{achievement.position}</span>
                                    </div>
                                </div>
                                <div className="achievement-content">
                                    <span className="achievement-org">{achievement.organization}</span>
                                    <h4 className="achievement-title">{achievement.title}</h4>
                                    <p className="achievement-desc">{achievement.description}</p>
                                    <span className="achievement-date">{achievement.date}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
