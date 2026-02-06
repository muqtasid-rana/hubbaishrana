import './AnimatedBackground.css';

const AnimatedBackground = ({ variant = 'default' }) => {
    return (
        <div className={`animated-background animated-background-${variant}`}>
            <div className="gradient-overlay" />
        </div>
    );
};

export default AnimatedBackground;
