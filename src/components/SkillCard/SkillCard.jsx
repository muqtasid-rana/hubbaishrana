import './SkillCard.css';

const SkillCard = ({ skill, index = 0 }) => {
    const Icon = skill.icon;

    return (
        <div className="skill-card">
            <div className="skill-icon-wrapper">
                {Icon && <Icon className="skill-icon" />}
            </div>
            <span className="skill-text">{skill.text}</span>
        </div>
    );
};

export default SkillCard;
