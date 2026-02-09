import {
    FaPaintBrush,
    FaMobileAlt,
    FaDesktop,
    FaBullhorn,
    FaBoxOpen,
    FaFigma,
    FaPenNib,
    FaLayerGroup,
    FaPalette,
    FaUsers,
    FaMagic,
    FaImage,
    FaPencilRuler
} from 'react-icons/fa';
import { SiAdobexd, SiSketch, SiInvision, SiCanva, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects } from 'react-icons/si';

// Skills organized by category for UX/UI Designer
export const skillCategories = [
    {
        category: 'Web Design',
        skills: [
            { icon: FaDesktop, text: 'Website UI/UX Design' },
            { icon: FaLayerGroup, text: 'Responsive Web Design' }
        ]
    },
    {
        category: 'App Design',
        skills: [
            { icon: FaMobileAlt, text: 'Mobile App UI/UX Design' },
            { icon: FaUsers, text: 'User Experience Research' }
        ]
    },
    {
        category: 'Ad Creatives',
        skills: [
            { icon: FaBullhorn, text: 'Social Media Ad Design' },
            { icon: FaMagic, text: 'Banner & Display Ads' }
        ]
    },
    {
        category: 'Marketing Design',
        skills: [
            { icon: FaPalette, text: 'Brand Identity Design' },
            { icon: FaPenNib, text: 'Marketing Collateral Design' }
        ]
    },
    {
        category: 'Product Design',
        skills: [
            { icon: FaBoxOpen, text: 'Product UI/UX Design' },
            { icon: FaLayerGroup, text: 'Design Systems & Components' }
        ]
    }
];

// Flat skills array for grid display
export const skills = [
    { icon: FaDesktop, text: 'Website UI/UX Design' },
    { icon: FaLayerGroup, text: 'Responsive Web Design' },
    { icon: FaMobileAlt, text: 'Mobile App UI/UX Design' },
    { icon: FaUsers, text: 'User Experience Research' },
    { icon: FaBullhorn, text: 'Social Media Ad Design' },
    { icon: FaMagic, text: 'Banner & Display Ads' },
    { icon: FaPalette, text: 'Brand Identity Design' },
    { icon: FaPenNib, text: 'Marketing Collateral Design' },
    { icon: FaBoxOpen, text: 'Product UI/UX Design' },
    { icon: FaLayerGroup, text: 'Design Systems & Components' },
    { icon: FaPaintBrush, text: 'Visual Design & Typography' },
    { icon: FaPencilRuler, text: 'User Interface Prototyping' }
];

// Tools
export const tools = [
    { icon: FaFigma, text: 'Figma' },
    { icon: SiAdobexd, text: 'Adobe XD' },
    { icon: FaImage, text: 'Adobe Photoshop' },
    { icon: FaPencilRuler, text: 'Adobe Illustrator' },
    { icon: SiSketch, text: 'Sketch' },
    { icon: SiInvision, text: 'InVision' },
    { icon: SiCanva, text: 'Canva' },
    { icon: FaMagic, text: 'Adobe After Effects' }
];
