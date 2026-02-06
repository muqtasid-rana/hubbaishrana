import './TimelineItem.css';

const TimelineItem = ({ item, index = 0, isLast = false }) => {
    const { title, subtitle, institution, duration, description, type, current } = item;

    return (
        <div className={`timeline-item ${isLast ? 'timeline-item-last' : ''}`}>
            <div className="timeline-marker">
                <div className={`timeline-dot ${current ? 'timeline-dot-current' : ''}`}>
                    <span className="dot-inner"></span>
                </div>
                {!isLast && <div className="timeline-line"></div>}
            </div>

            <div className="timeline-content">
                <div className="timeline-header">
                    <span className={`timeline-type timeline-type-${type}`}>
                        {type === 'startup' ? 'Startup' :
                            type === 'work' ? 'Work' :
                                type === 'freelance' ? 'Freelance' :
                                    'Education'}
                    </span>
                    <span className="timeline-duration">{duration}</span>
                </div>

                <h4 className="timeline-title">{title}</h4>
                {subtitle && <p className="timeline-subtitle">{subtitle}</p>}
                <p className="timeline-institution">{institution}</p>
                <p className="timeline-description">{description}</p>

                {current && (
                    <span className="timeline-current-badge">Currently Active</span>
                )}
            </div>
        </div>
    );
};

export default TimelineItem;
