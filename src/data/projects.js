// Featured/Main Projects with Case Studies
export const featuredProjects = [
    {
        id: 'incorpo',
        title: 'Incorpo - Automated Hiring System',
        description: 'A fully automated hiring system that parses CVs, filters candidates, rates them accordingly, and sends automated emails to selected candidates. Simplifies the entire recruitment process.',
        image: '/src/assets/mockups/incorp.png',
        caseStudy: {
            problem: 'Companies waste hours manually reviewing CVs, filtering candidates, and managing recruitment data.',
            solution: 'Built an automated hiring platform that parses CVs, extracts candidate skills, and ranks profiles using AI.',
            techStack: ['ReactJS', 'NodeJS', 'Flutter', 'Firebase Auth', 'Firestore', 'Cloud Functions', 'Python CV Parsing API', 'AI Ranking', 'MVVM'],
            result: 'Currently in deployment, with automation reducing screening time by over 70%.'
        },
        tags: ['Full-Stack', 'AI', 'SaaS'],
        featured: true
    },
    {
        id: 'letitfly',
        title: 'Let It Fly',
        description: 'An anonymous emotional support platform where users can express feelings freely without fear of judgment. Features real-time interactions, notifications, and AI integration.',
        image: '/src/assets/mockups/letitfly.png',
        caseStudy: {
            problem: 'People needed a safe space to share feelings anonymously—no existing platform allowed expressing emotions without fear of judgment.',
            solution: 'Built an anonymous emotional support platform where users can write, share, and connect freely without revealing their identity.',
            techStack: ['Flutter', 'MVVM', 'Provider', 'Firebase Auth', 'Firestore', 'Storage', 'Cloud Functions', 'FCM', 'AI Integration', 'Google Ads'],
            result: 'Currently in deployment process with growing user engagement.'
        },
        tags: ['Mobile App', 'Firebase', 'AI'],
        featured: true
    }
];

// Play Store Published App
export const playStoreApp = {
    id: 'muslimone',
    title: 'Muslim One - Complete Islamic Companion',
    description: 'An all-in-one Islamic app featuring Quran with translations, audio recitations, hadith collections, prayer times, qibla finder, tasbeeh counter, Islamic calendar, and Asma-ul-Husna—all in a distraction-free experience.',
    image: '/src/assets/mockups/muslimone.png',
    caseStudy: {
        problem: 'Muslims wanted an all-in-one Islamic app without intrusive ads disrupting their spiritual experience.',
        solution: 'Built a complete Islamic companion app with Quran, tafseer, prayer times, hadith collection, qibla finder, tasbeeh counter, Islamic calendar, and more.',
        techStack: ['Flutter', 'Firebase', 'Local Database', 'REST APIs', 'Google Ads (Banner only)'],
        result: 'Currently in Early Access on PlayStore with positive user feedback.'
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.groflex.muslimone',
    tags: ['Published', 'PlayStore', 'Flutter']
};

// Main Projects (Case Study Worthy)
export const mainProjects = [
    {
        id: 'inayat-motors',
        title: 'Inayat Motors - Bike Shop Management System',
        description: 'A complete bike shop management system with invoice generation, billing, inventory tracking, sales analytics, and customer management.',
        image: '/src/assets/mockups/inayat.png',
        caseStudy: {
            problem: 'Bike shops often struggle with manual record-keeping, inaccurate stock tracking, and slow billing processes.',
            solution: 'Developed a full management system that automates inventory updates, billing, customer info, and sales history.',
            techStack: ['ReactJS', 'NodeJS', 'Flutter', 'Firebase Firestore', 'Firebase Auth', 'MVVM', 'Cloud Functions', 'PDF Generation'],
            result: 'Successfully deployed for Inayat Motors, improving workflow speed and reducing inventory errors.'
        },
        tags: ['Full-Stack', 'Business Solution']
    },
    {
        id: 'rpm-dynamics',
        title: 'RPM Dynamics - Motorbike Shop Website',
        description: 'A modern, responsive website for an automotive shop to showcase bikes, services, and generate customer leads.',
        image: '/src/assets/mockups/rpmm.png',
        caseStudy: {
            problem: 'RPM Dynamics needed an online presence to showcase their bikes and services but had no website.',
            solution: 'Designed and developed a fast, SEO-optimized website with product display, service pages, and lead-generation contact section.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'SEO', 'Vercel'],
            result: 'Website successfully launched, increasing customer inquiries and improving brand credibility.'
        },
        tags: ['Web', 'SEO']
    },
    {
        id: 'payproof',
        title: 'PayProof - Transaction Saver',
        description: 'A transaction proof system with shareable links so users never lose payment details and can easily share them with anyone.',
        image: '/src/assets/mockups/payproof.png',
        caseStudy: {
            problem: 'Users struggled to securely store and access their payment details or provide proof of transactions when needed.',
            solution: 'Developed a transaction proof system with shareable links for easy access and sharing.',
            techStack: ['Flutter', 'MVVM', 'Provider', 'Firebase Auth', 'Firestore', 'Storage', 'Google Ads'],
            result: 'Currently in Early Access on PlayStore.'
        },
        tags: ['Mobile App', 'PlayStore']
    },
    {
        id: 'groflex',
        title: 'Groflex Agency Website',
        description: 'A professional website for an online services agency with clean UI and modern design.',
        image: '/src/assets/mockups/groflex.png',
        caseStudy: {
            problem: 'Needed a professional website for my online agency to establish credibility.',
            solution: 'Built a website with Flutter and hosted on Firebase with a clean, visually appealing UI.',
            techStack: ['Flutter Web', 'Firebase Hosting'],
            result: 'Successfully drove traffic to the agency.'
        },
        tags: ['Web', 'Flutter']
    },
    {
        id: 'world-news',
        title: 'World News',
        description: 'A news app with REST API integration and category-based feeds for real-time global updates.',
        image: '/src/assets/mockups/worldnews.png',
        caseStudy: {
            problem: 'Users needed a reliable source for real-time categorized news updates.',
            solution: 'Created a news app with REST API integration and category-based feeds.',
            techStack: ['Flutter', 'News API', 'MVVM'],
            result: 'Currently in Early Access on Play Store.'
        },
        tags: ['Mobile App', 'API']
    },
    {
        id: 'etisalat',
        title: 'Etisalat AFG SDK API Development',
        description: 'Developed multiple APIs using Firebase & NodeJS for Etisalat SDK integration.',
        image: '/src/assets/mockups/etisalat.png',
        caseStudy: {
            problem: 'Client needed custom APIs to power their mobile application.',
            solution: 'Created comprehensive APIs as per client requirements.',
            techStack: ['Flutter', 'Firebase', 'NodeJS', 'MVVM'],
            result: 'Client was satisfied with the results and integration.'
        },
        tags: ['Backend', 'API']
    },
    {
        id: 'lms',
        title: 'PMDC School LMS UI',
        description: 'A learning management system interface for schools with dashboards, attendance, assignments, and results sections.',
        image: '/src/assets/mockups/lms.png',
        caseStudy: {
            problem: 'Schools needed a modern and easy-to-use LMS interface to manage students, teachers, and classes.',
            solution: 'Designed and developed a complete UI for a school learning management system.',
            techStack: ['Flutter', 'Provider', 'UI/UX Design'],
            result: 'Provided a scalable and modern LMS UI for educational institutions.'
        },
        tags: ['UI/UX', 'Education']
    },
    {
        id: 'agro-mart',
        title: 'Agro Mart',
        description: 'A grocery and agriculture marketplace app where users can browse, order, and manage deliveries.',
        image: '/src/assets/mockups/agroo.png',
        caseStudy: {
            problem: 'Farmers and customers lacked a digital marketplace to buy and sell fresh produce directly.',
            solution: 'Built a grocery and agriculture marketplace app with browsing and ordering features.',
            techStack: ['Flutter', 'Firebase', 'MVVM', 'REST APIs'],
            result: 'Currently in development with database integration.'
        },
        tags: ['Mobile App', 'E-commerce']
    }
];

// Small Projects (Grid Display)
export const smallProjects = [
    {
        id: 'chatnova',
        title: 'ChatNova',
        description: 'A real-time chat app built with Flutter and Firebase featuring message sync, profile management, and last seen.',
        image: '/src/assets/mockups/chatnova.png',
        tags: ['Flutter', 'Firebase']
    },
    {
        id: 'youmovies',
        title: 'You Movies',
        description: 'A movie explorer app using YouTube API to display trailers and reviews with category search.',
        image: '/src/assets/mockups/youmovies.png',
        tags: ['Flutter', 'API']
    },
    {
        id: 'epic-rps',
        title: 'Epic RPS Game UI',
        description: 'A modern, animated Rock Paper Scissors game UI with custom graphics and smooth transitions.',
        image: '/src/assets/mockups/epic.png',
        tags: ['Flutter', 'Game']
    },
    {
        id: 'afghan-flavours',
        title: 'Afghan Flavours - APIs',
        description: 'A recipe and cuisine app with API integration for Afghan dishes, categories, and search features.',
        image: '/src/assets/mockups/afghan.png',
        tags: ['Flutter', 'API']
    },
    {
        id: 'skillathon',
        title: 'Skillathon Competition App',
        description: 'An event application platform for Skillathon competition with submission tracking and participant features.',
        image: '/src/assets/mockups/skillathon.png',
        tags: ['Flutter', 'Events']
    },
    {
        id: 'notes',
        title: 'Minimalist Notes App',
        description: 'A clean, distraction-free notes app with create, read, update, and delete functionality.',
        image: '/src/assets/mockups/notes.png',
        tags: ['Flutter', 'CRUD']
    },
    {
        id: 'nike',
        title: 'Nike Ecommerce Store UI',
        description: 'A sleek Nike store UI with product listing, detail view, and shopping cart functionality.',
        image: '/src/assets/mockups/nike.png',
        tags: ['Flutter', 'E-commerce']
    },
    {
        id: 'whatsapp',
        title: 'WhatsApp Clone UI',
        description: 'A pixel-perfect WhatsApp UI clone with chat list, message view, and status layout.',
        image: '/src/assets/mockups/whatsapp.png',
        tags: ['Flutter', 'UI Clone']
    },
    {
        id: 'taskmate',
        title: 'TaskMate - Todo App',
        description: 'An attractive TODO List App using RESTful APIs with CRUD operations.',
        image: '/src/assets/mockups/todo.png',
        tags: ['Flutter', 'REST API']
    }
];
