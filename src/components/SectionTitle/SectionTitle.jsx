import './SectionTitle.css';

const SectionTitle = ({
    title,
    subtitle,
    align = 'center',
    gradient = true
}) => {
    return (
        <div className={`section-title section-title-${align}`}>
            {subtitle && (
                <span className="section-subtitle">{subtitle}</span>
            )}
            <h2 className={gradient ? 'gradient-text' : ''}>
                {title}
            </h2>
            <div className="section-title-line">
                <span className="line-glow"></span>
            </div>
        </div>
    );
};

export default SectionTitle;
