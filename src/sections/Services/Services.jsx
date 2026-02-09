import { FaDesktop, FaMobileAlt, FaBullhorn, FaBoxOpen } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Button from '../../components/Button/Button';
import './Services.css';

const services = [
    {
        icon: FaDesktop,
        title: 'Web Design',
        description: 'Creating stunning, modern website designs that captivate users and deliver exceptional user experiences with focus on aesthetics and usability.',
        features: [
            'Website UI/UX Design',
            'Responsive Design',
            'Landing Page Design',
            'Web App Interfaces'
        ]
    },
    {
        icon: FaMobileAlt,
        title: 'App Design',
        description: 'Designing intuitive and visually stunning mobile app interfaces for iOS and Android that prioritize user experience and engagement.',
        features: [
            'Mobile App UI/UX',
            'iOS & Android Design',
            'Interactive Prototyping',
            'Design Systems'
        ]
    },
    {
        icon: FaBullhorn,
        title: 'Ad Creatives & Marketing',
        description: 'Creating eye-catching ad creatives and marketing materials that drive engagement and help brands stand out in competitive markets.',
        features: [
            'Social Media Ads',
            'Banner & Display Ads',
            'Marketing Collateral',
            'Brand Identity'
        ]
    },
    {
        icon: FaBoxOpen,
        title: 'Product Design',
        description: 'End-to-end product design services from concept to final design, ensuring cohesive user experiences across all touchpoints.',
        features: [
            'Product UI/UX',
            'Design Systems',
            'User Research',
            'Wireframing & Prototyping'
        ]
    }
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <SectionTitle
                    title="Services I Offer"
                    subtitle="How I Can Help"
                />

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                <div className="services-cta">
                    <p>Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
                    <Button
                        href="https://wa.me/923129714470"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                    >
                        Book a Free Call
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Services;
