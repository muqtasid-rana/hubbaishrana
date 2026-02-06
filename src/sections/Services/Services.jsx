import { FaMobileAlt, FaCode, FaVideo, FaPaintBrush } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Button from '../../components/Button/Button';
import './Services.css';

const services = [
    {
        icon: FaMobileAlt,
        title: 'Mobile App Development',
        description: 'Building high-performance cross-platform mobile applications with Flutter that deliver exceptional user experiences and drive real business results.',
        features: [
            'Cross-platform iOS & Android',
            'Firebase Integration',
            'Push Notifications',
            'Play Store Deployment'
        ]
    },
    {
        icon: FaCode,
        title: 'Web Development',
        description: 'Creating modern, responsive web applications using React.js and Node.js with focus on performance, SEO, and user engagement.',
        features: [
            'React.js Applications',
            'Node.js Backend',
            'REST API Development',
            'Database Design'
        ]
    },
    {
        icon: FaVideo,
        title: 'Content Creation',
        description: 'Sharing knowledge and insights through engaging tech content, tutorials, and development journey documentation on social platforms.',
        features: [
            'Tech Tutorials',
            'Development Insights',
            'Social Media Content',
            'Community Building'
        ]
    },
    {
        icon: FaPaintBrush,
        title: 'UI/UX Design',
        description: 'Designing intuitive and visually stunning interfaces that prioritize user experience and align with modern design principles.',
        features: [
            'Mobile App UI',
            'Web Interface Design',
            'Prototyping',
            'Design Systems'
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
                        href="https://calendly.com"
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
