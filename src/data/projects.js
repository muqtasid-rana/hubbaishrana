// Featured/Main Projects with Case Studies
export const featuredProjects = [
    {
        id: 'incorpo',
        title: 'Incorpo - Automated Hiring System',
        description: 'Designed a streamlined hiring platform UI that simplifies the recruitment journey. Created intuitive dashboards for recruiters, candidate profile cards, and seamless user flows from job posting to candidate selection.',
        image: '/assets/mockups/incorp.png',
        caseStudy: {
            problem: 'Recruiters struggled with cluttered interfaces and complex workflows while reviewing candidates and managing hiring pipelines.',
            solution: 'Designed a clean, intuitive interface with smart candidate cards, visual progress tracking, and one-click actions to streamline the hiring experience.',
            techStack: ['Figma', 'UI/UX Design', 'Design System', 'Prototyping', 'User Research', 'Wireframing'],
            result: 'Successfully delivered a user-friendly design that reduced recruiter onboarding time and improved workflow efficiency.'
        },
        tags: ['UI/UX Design', 'Dashboard', 'SaaS'],
        featured: true
    },
    {
        id: 'letitfly',
        title: 'Let It Fly',
        description: 'Designed a calming, safe-space mobile app for anonymous emotional expression. Focused on creating a judgment-free visual experience with soft aesthetics, intuitive navigation, and thoughtful micro-interactions.',
        image: '/assets/mockups/letitfly.png',
        caseStudy: {
            problem: 'Existing mental wellness apps felt clinical and impersonal—users needed a warm, inviting space to express their emotions without stigma.',
            solution: 'Created a compassionate design language with soft colors, gentle animations, and anonymous posting flows that encourage authentic expression.',
            techStack: ['Figma', 'Mobile UI Design', 'Prototyping', 'User Research', 'Emotional Design', 'Accessibility'],
            result: 'Delivered a design that users described as calming and approachable, currently in deployment.'
        },
        tags: ['Mobile App', 'UI/UX Design', 'Wellness'],
        featured: true
    }
];

// Play Store Published App
export const playStoreApp = {
    id: 'muslimone',
    title: 'Muslim One - Complete Islamic Companion',
    description: 'An all-in-one Islamic app featuring Quran with translations, audio recitations, hadith collections, prayer times, qibla finder, tasbeeh counter, Islamic calendar, and Asma-ul-Husna—all in a distraction-free experience.',
    image: '/assets/mockups/muslimone.png',
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
        id: 'hybrid',
        title: 'Hybrid Mediaworks',
        description: 'Designed user experiences for digital products at Hybrid Mediaworks, combining UX principles with AI-powered workflows to deliver high-quality designs efficiently.',
        image: '/assets/mockups/hybrid.jpeg',
        caseStudy: {
            problem: 'Needed efficient design workflows to handle multiple digital product projects.',
            solution: 'Implemented AI-powered design workflows combined with traditional UX principles.',
            techStack: ['Figma', 'AI Tools', 'UX Research', 'Prototyping'],
            result: 'Delivered high-quality designs efficiently across multiple projects.'
        },
        tags: ['UX Design', 'AI Workflow']
    },
    {
        id: 'pocketwatcher',
        title: 'Pocket Watcher Finance',
        description: 'A personal finance tracking app that helps users monitor expenses, set budgets, and gain insights into their spending habits.',
        image: '/assets/mockups/pocketwatcher finance.jpeg',
        caseStudy: {
            problem: 'Users needed a simple way to track personal finances and understand spending patterns.',
            solution: 'Built a finance tracking app with budget management and spending analytics.',
            techStack: ['Flutter', 'Firebase', 'Charts', 'MVVM'],
            result: 'Successfully helped users gain better control over their finances.'
        },
        tags: ['Mobile App', 'Finance']
    },
    {
        id: 'motiveads',
        title: 'Motive Ads',
        description: 'An advertising platform interface designed for managing and tracking ad campaigns with analytics and performance metrics.',
        image: '/assets/mockups/motive ads.jpeg',
        caseStudy: {
            problem: 'Advertisers needed a streamlined platform to manage and track ad campaigns.',
            solution: 'Designed an intuitive advertising dashboard with campaign management and analytics.',
            techStack: ['UI/UX Design', 'Figma', 'Dashboard Design', 'Analytics'],
            result: 'Created a user-friendly advertising management interface.'
        },
        tags: ['UI/UX', 'Dashboard']
    },
    {
        id: 'inayat-motors',
        title: 'Inayat Motors - Bike Shop Management System',
        description: 'A complete bike shop management system with invoice generation, billing, inventory tracking, sales analytics, and customer management.',
        image: '/assets/mockups/inayat.png',
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
        image: '/assets/mockups/rpmm.png',
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
        image: '/assets/mockups/payproof.png',
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
        image: '/assets/mockups/groflex.png',
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
        image: '/assets/mockups/worldnews.png',
        caseStudy: {
            problem: 'Users needed a reliable source for real-time categorized news updates.',
            solution: 'Created a news app with REST API integration and category-based feeds.',
            techStack: ['Flutter', 'News API', 'MVVM'],
            result: 'Currently in Early Access on Play Store.'
        },
        tags: ['Mobile App', 'API']
    },

    {
        id: 'lms',
        title: 'PMDC School LMS UI',
        description: 'A learning management system interface for schools with dashboards, attendance, assignments, and results sections.',
        image: '/assets/mockups/lms.png',
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
        image: '/assets/mockups/agroo.png',
        caseStudy: {
            problem: 'Farmers and customers lacked a digital marketplace to buy and sell fresh produce directly.',
            solution: 'Built a grocery and agriculture marketplace app with browsing and ordering features.',
            techStack: ['Flutter', 'Firebase', 'MVVM', 'REST APIs'],
            result: 'Currently in development with database integration.'
        },
        tags: ['Mobile App', 'E-commerce']
    },

    {
        id: 'navigator',
        title: 'Navigator',
        description: 'A navigation and mapping application with route planning, location search, and real-time directions.',
        image: '/assets/mockups/navigator.jpeg',
        caseStudy: {
            problem: 'Users needed intuitive navigation with efficient route planning capabilities.',
            solution: 'Developed a navigation app with smart routing and location-based features.',
            techStack: ['Flutter', 'Google Maps API', 'Location Services', 'MVVM'],
            result: 'Delivered a reliable navigation experience for users.'
        },
        tags: ['Mobile App', 'Maps']
    },
    {
        id: 'testolz',
        title: 'Testolz',
        description: 'An online testing and assessment platform for creating, managing, and analyzing quizzes and examinations.',
        image: '/assets/mockups/testolz.jpeg',
        caseStudy: {
            problem: 'Educators needed a platform to create and manage online assessments efficiently.',
            solution: 'Built a comprehensive testing platform with quiz creation, timer, and result analytics.',
            techStack: ['Flutter', 'Firebase', 'Cloud Functions', 'Analytics'],
            result: 'Provided an effective assessment tool for educational purposes.'
        },
        tags: ['Education', 'Assessment']
    }
];

// Small Projects (Grid Display)
export const smallProjects = [
    {
        id: 'quizapp',
        title: 'Quiz App',
        description: 'A fun and interactive quiz application with multiple categories and score tracking.',
        image: '/assets/mockups/quiz app minor.jpeg',
        tags: ['Flutter', 'Quiz']
    },

    {
        id: 'youmovies',
        title: 'You Movies',
        description: 'A movie explorer app using YouTube API to display trailers and reviews with category search.',
        image: '/assets/mockups/youmovies.png',
        tags: ['Flutter', 'API']
    },
    {
        id: 'epic-rps',
        title: 'Epic RPS Game UI',
        description: 'A modern, animated Rock Paper Scissors game UI with custom graphics and smooth transitions.',
        image: '/assets/mockups/epic.png',
        tags: ['Flutter', 'Game']
    },

    {
        id: 'skillathon',
        title: 'Skillathon Competition App',
        description: 'An event application platform for Skillathon competition with submission tracking and participant features.',
        image: '/assets/mockups/skillathon.png',
        tags: ['Flutter', 'Events']
    },
    {
        id: 'notes',
        title: 'Minimalist Notes App',
        description: 'A clean, distraction-free notes app with create, read, update, and delete functionality.',
        image: '/assets/mockups/notes.png',
        tags: ['Flutter', 'CRUD']
    },
    {
        id: 'nike',
        title: 'Nike Ecommerce Store UI',
        description: 'A sleek Nike store UI with product listing, detail view, and shopping cart functionality.',
        image: '/assets/mockups/nike.png',
        tags: ['Flutter', 'E-commerce']
    },
    {
        id: 'whatsapp',
        title: 'WhatsApp Clone UI',
        description: 'A pixel-perfect WhatsApp UI clone with chat list, message view, and status layout.',
        image: '/assets/mockups/whatsapp.png',
        tags: ['Flutter', 'UI Clone']
    },
    {
        id: 'taskmate',
        title: 'TaskMate - Todo App',
        description: 'An attractive TODO List App using RESTful APIs with CRUD operations.',
        image: '/assets/mockups/todo.png',
        tags: ['Flutter', 'REST API']
    }
];
