import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ImageLightbox.css';

const ImageLightbox = ({ image, title, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('lightbox-overlay')) {
            onClose();
        }
    };

    return (
        <div className="lightbox-overlay" onClick={handleBackdropClick}>
            <button className="lightbox-close" onClick={onClose} aria-label="Close">
                <FaTimes />
            </button>
            <div className="lightbox-content">
                <img src={image} alt={title} className="lightbox-image" />
                <p className="lightbox-title">{title}</p>
            </div>
        </div>
    );
};

export default ImageLightbox;
