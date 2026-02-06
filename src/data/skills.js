import {
    FaMobileAlt,
    FaDatabase,
    FaGlobe,
    FaLayerGroup,
    FaPaintBrush,
    FaRobot,
    FaGoogle,
    FaPython,
    FaCode,
    FaAndroid,
    FaFire,
    FaPaperPlane,
    FaFigma,
    FaGooglePlay,
    FaGithub,
    FaTerminal
} from 'react-icons/fa';
import { SiCplusplus, SiHuggingface } from 'react-icons/si';

// Skills organized by category
export const skillCategories = [
    {
        category: 'Mobile Development',
        skills: [
            { icon: FaMobileAlt, text: 'Mobile App Development (Flutter & Dart)' }
        ]
    },
    {
        category: 'Web Development',
        skills: [
            { icon: FaGlobe, text: 'Websites & Web Applications (ReactJS, NodeJS)' }
        ]
    },
    {
        category: 'Backend & Database',
        skills: [
            { icon: FaDatabase, text: 'Backend & Databases (Firebase, NodeJS, PHP)' },
            { icon: FaGlobe, text: 'REST API Integration & Development' }
        ]
    },
    {
        category: 'Architecture & Design',
        skills: [
            { icon: FaLayerGroup, text: 'MVVM & MVC Architecture' },
            { icon: FaPaintBrush, text: 'UI/UX Design' }
        ]
    },
    {
        category: 'AI & Automation',
        skills: [
            { icon: FaRobot, text: 'AI Integration' },
            { icon: FaRobot, text: 'Prompt Engineering' },
            { icon: FaRobot, text: 'AI Automation' }
        ]
    },
    {
        category: 'Other Technologies',
        skills: [
            { icon: FaGlobe, text: 'Online & Offline Systems' },
            { icon: FaGoogle, text: 'Mobile & Web Ads Integration' },
            { icon: FaPython, text: 'Python' },
            { icon: SiCplusplus, text: 'C++' }
        ]
    }
];

// Flat skills array for grid display
export const skills = [
    { icon: FaMobileAlt, text: 'Mobile App Development (Flutter & Dart)' },
    { icon: FaGlobe, text: 'Websites & Web Applications (ReactJS, NodeJS)' },
    { icon: FaDatabase, text: 'Backend & Databases (Firebase, NodeJS, PHP)' },
    { icon: FaGlobe, text: 'Online & Offline Systems' },
    { icon: FaGlobe, text: 'REST API Integration & Development' },
    { icon: FaLayerGroup, text: 'MVVM & MVC Architecture' },
    { icon: FaPaintBrush, text: 'UI/UX Design' },
    { icon: FaRobot, text: 'AI Integration' },
    { icon: FaGoogle, text: 'Mobile & Web Ads Integration' },
    { icon: FaPython, text: 'Python' },
    { icon: SiCplusplus, text: 'C++' },
    { icon: FaRobot, text: 'Prompt Engineering' },
    { icon: FaRobot, text: 'AI Automation' }
];

// Tools
export const tools = [
    { icon: FaCode, text: 'VS Code' },
    { icon: FaAndroid, text: 'Android Studio' },
    { icon: FaFire, text: 'Firebase Console' },
    { icon: FaFire, text: 'Firebase Studio' },
    { icon: FaPaperPlane, text: 'Postman' },
    { icon: FaFigma, text: 'Figma' },
    { icon: FaGooglePlay, text: 'Google Play Console' },
    { icon: FaGithub, text: 'Git & GitHub' },
    { icon: FaTerminal, text: 'Command Line' },
    { icon: SiHuggingface, text: 'Hugging Face' },
    { icon: FaRobot, text: 'Make (Automation)' }
];
