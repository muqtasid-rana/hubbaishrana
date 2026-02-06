import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    icon,
    className = '',
    ...props
}) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`btn btn-${variant} btn-${size} ${className}`}
            {...props}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{children}</span>
        </Component>
    );
};

export default Button;
