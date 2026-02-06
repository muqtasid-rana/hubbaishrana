import './ServiceCard.css';

const ServiceCard = ({ service, index = 0 }) => {
    const { icon: Icon, title, description, features } = service;

    return (
        <div className="service-card">
            <div className="service-card-inner">
                <div className="service-icon-wrapper">
                    {Icon && <Icon className="service-icon" />}
                </div>

                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>

                {features && (
                    <ul className="service-features">
                        {features.map((feature, i) => (
                            <li key={i}>
                                <span className="feature-check">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
