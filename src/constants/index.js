import {
    attractorSchool,
    attractorSoftware,
    freelance,
} from '../assets/images';
import {
    antd,
    css,
    docker,
    express,
    git,
    github,
    html,
    javascript,
    jest,
    linkedin,
    mongodb,
    mui,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    three,
    typescript,
    email,
    next,
    video,
} from '../assets/icons';

export const skills = [
    {
        imageUrl: html,
        name: 'HTML',
        type: 'Frontend',
    },
    {
        imageUrl: css,
        name: 'CSS',
        type: 'Frontend',
    },
    {
        imageUrl: sass,
        name: 'Sass',
        type: 'Frontend',
    },
    {
        imageUrl: javascript,
        name: 'JavaScript',
        type: 'Frontend',
    },
    {
        imageUrl: typescript,
        name: 'TypeScript',
        type: 'Frontend',
    },
    {
        imageUrl: react,
        name: 'React',
        type: 'Frontend',
    },
    {
        imageUrl: next,
        name: 'Next',
        type: 'Frontend',
    },
    {
        imageUrl: redux,
        name: 'Redux',
        type: 'State Management',
    },
    {
        imageUrl: mui,
        name: 'Material-UI',
        type: 'Frontend',
    },
    {
        imageUrl: antd,
        name: 'Ant Design',
        type: 'Frontend',
    },
    {
        imageUrl: tailwindcss,
        name: 'Tailwind CSS',
        type: 'Frontend',
    },
    {
        imageUrl: three,
        name: 'Three',
        type: 'Frontend',
    },
    {
        imageUrl: jest,
        name: 'Jest',
        type: 'Frontend',
    },
    {
        imageUrl: git,
        name: 'Git',
        type: 'Version Control',
    },
    {
        imageUrl: github,
        name: 'GitHub',
        type: 'Version Control',
    },
    {
        imageUrl: nodejs,
        name: 'Node.js',
        type: 'Backend',
    },
    {
        imageUrl: express,
        name: 'Express',
        type: 'Backend',
    },
    {
        imageUrl: mongodb,
        name: 'MongoDB',
        type: 'Database',
    },
    {
        imageUrl: docker,
        name: 'Docker',
        type: 'Frontend & Backend',
    },
];

export const experiences = [
    {
        title: 'Advanced 15-months JavaScript course',
        company_name: 'Attractor School',
        icon: attractorSchool,
        iconBg: '#b6d4e8',
        date: 'Oct 2021 - Dec 2022',
        points: [
            'Advanced CSS (Flexbox, Grid) for layout design.',
            'Responsive web design principles.',
            'Modern JavaScript features (ES6+).',
            'React for efficient UI development.',
            'Redux, React Context and MobX for state management',
            'Backend with Node.js and Express.',
            'Containerization with Docker and CI/CD processes.',
        ],
    },
    {
        title: 'Fullstack Developer',
        company_name: 'Freelance',
        icon: freelance,
        iconBg: '#b7e4c7',
        date: 'Jan 2022 - Jan 2023',
        points: [
            'In a team of 2 people we developed an e-commerce website for an electronics store from scratch.',
            'Created an admin panel to manage products, orders, and user data.',
            'Implemented catalog and shopping cart functionalities for browsing and purchasing.',
            ,
        ],
    },
    {
        title: 'Frontend Developer',
        company_name: 'Attractor Software',
        icon: attractorSoftware,
        iconBg: '#184e6b',
        date: 'Feb 2023 - May 2024',
        points: [
            'Developing and maintaining web applications using React and other related technologies.',
            'Collaborating with cross-functional teams including designers, project managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
];

export const socialLinks = [
    {
        name: 'Email',
        iconUrl: email,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lera-movsesian-838192259/',
    },
];

export const projects = [
    {
        iconUrl: video,
        theme: 'btn-back-blue',
        name: 'Meeting App',
        description:
            'Developed a React-based Meeting App utilizing Stream.js for real-time communication. Features high-quality video calling, screen sharing, and personal meeting rooms. The app supports large group meetings, it includes a scheduling feature with calendar integration. The user-friendly interface ensures seamless, secure, and reliable communication for users.',
        link: 'https://meeting-app-delta.vercel.app/',
    },
];
